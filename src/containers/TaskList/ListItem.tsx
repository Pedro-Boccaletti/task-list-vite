import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import tw from 'twin.macro';
import CheckBox from '../../components/CheckBox';
import { TaskRes } from '../../typings/Api';
import { Task } from '../../typings/Task'
import { axiosReq } from '../../utils/axiosReq';
import When from './When';

const SItem = styled.div`
  ${tw`flex space-x-3 px-10 bg-gray-100 bg-gradient-to-b m-2 rounded-2xl py-3`}
  min-width: 30%;
`

const STitle = styled.h5`
 ${tw`
    text-xl
    md:text-2xl
    text-black
    font-medium
    transition
    duration-500
    ease-in-out
    hover:text-gray-600
 `}
`

const SDescription = styled.p`
  ${tw`
    ml-2
    text-xs
    md:text-base
    text-black
    font-extralight
    transition
    duration-500
    ease-in-out
    hover:text-gray-700
    max-w-xs
    md:max-w-xl
  `}
`

const SCheckBox = styled(CheckBox)`
  ${tw`mt-3 h-4 w-4`}
  min-width: 1rem;
  min-height: 1rem;

  :checked {
    ${tw`bg-blue-600`}

    :hover {
      ${tw`bg-blue-800`}
    }
  }
`

type Props = {
  id: string;
}

function ListItem({ id }: Props) {
  const checkRef = useRef<HTMLInputElement>(null)
  const queryClient = useQueryClient()

  const reqTask = async (): Promise<Task> => {
    const res: { data: TaskRes } = await axiosReq().get(`/task/${id}`)    
    return {
      ...res.data,
      date: res.data.time ? new Date(res.data.time) : undefined,
    }
  }

  const changeComplete = async (complete: boolean): Promise<Task> => {
    const res: {data: TaskRes} = await axiosReq().patch(`task/${id}`, {
      complete,
    })
    return {
      ...res.data,
      date: res.data.time ? new Date(res.data.time) : undefined,
    }
  }

  const {
    status,
    error,
    data: task,
  } = useQuery({
    queryKey: ['tasks', id],
    queryFn: reqTask,
  })

  const { mutate } = useMutation({
    mutationFn: changeComplete,
    onSuccess: (updatedTask) => {
      queryClient.setQueryData(['tasks', id], updatedTask)
    }
  })


  useEffect(() => {
    if (checkRef.current && task)
      checkRef.current.checked = task.complete
  }, [checkRef.current, task])


  if (status === 'error') {
    console.log(`Error in List Fetch: ${JSON.stringify(error)}`);
    
    return null
  }

  if (status === 'loading') return (<div>loading</div>)

  if (status === 'idle') return null
  
  return (
    <SItem>
      <SCheckBox forwardRef={checkRef} onChange={(e) => {
        mutate(e.target.checked)
      }} />
      <div>
        <STitle>{task.title}</STitle>
        {task.description && <SDescription>{task.description}</SDescription> }
        {task.date && <When date={task.date}/>}
      </div>
      
    </SItem>
  )
}

export default ListItem