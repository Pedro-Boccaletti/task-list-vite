import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
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
  const { id } = useAppSelector(state => state.userSlice.user);

  const reqIds = async () => {
    const res: { data: string[] } = await axiosReq().get(`/task/user/${id}/taskIds`);
    return res.data;
  };

  const {
    status,
    error,
    data: tasksIds,
  } = useQuery({
    queryKey: 'tasksIds',
    queryFn: reqIds,
  })

  if (status === 'error') {
    console.log(`Error in List Fetch: ${JSON.stringify(error)}`);
    
    return null
  }

  if (status === 'loading') return (<div>loading</div>)

  return (
    <>
      <SList role='list'>
        {status === 'success' && tasksIds.map((e, i) => <ListItem key={i} id={e} />)}
      </SList>
      <AddField />
    </>
  )
}

export default List