import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import CheckBox from '../../components/CheckBox';
import { Task } from '../../typings/Task'
import { axiosReq } from '../../utils/axiosReq';
import When from './When';

const SItem = styled.div`
  ${tw`flex justify-center items-center space-x-3 px-10`}
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
 `}
`

type Props = {
  task: Task;
}

function ListItem({ task }: Props) {
  const checkRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (checkRef.current)
      checkRef.current.checked = task.complete
  }, [checkRef.current])

  return (
    <SItem>
      <CheckBox forwardRef={checkRef} onChange={(e) => {
        axiosReq().patch(`task/${task.id}`, {
          complete: e.target.checked,
        })
      }} />
      <div>
        <STitle>{task.title}</STitle>
        {task.description && <SDescription>{task.description}</SDescription> }
        <When date={task.date}/>
      </div>
      
    </SItem>
  )
}

export default ListItem