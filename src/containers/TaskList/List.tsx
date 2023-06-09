import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { useAppSelector } from '../../redux/hooks';
import { TaskRes } from '../../typings/Api';
import { Task } from '../../typings/Task';
import { axiosReq } from '../../utils/axiosReq';
import AddField from './AddField';
import ListItem from './ListItem';

const SList = styled.div`
  ${tw`flex flex-col items-start`}
`;

type Props = {
}

function List() {
  const [items, setItems] = useState<Task[]>([]);
  const { id } = useAppSelector(state => state.userSlice.user);

  useEffect(() => {
    const req = async () => {
      const res: { data: TaskRes[] } = await axiosReq().get(`/task/user/${id}`);
      
      const tmp: Task[] = res.data.map(e => {
        return {
          id: e.id,
          title: e.title,
          description: e.description,
          date: e.time ? new Date(e.time) : undefined,
          complete: e.complete,
        };
      })
      setItems(tmp);
    };
    if (id) req();
  }, [id]);

  return (
    <>
      <SList role='list'>
        {items.map((e, i) => <ListItem key={i} task={e} />)}
      </SList>
      <AddField />
    </>
  )
}

export default List