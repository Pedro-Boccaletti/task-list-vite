import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { Task } from '../../typings/Task'
import When from './When';

const SItem = styled.li`
  ${tw`flex justify-center items-center px-10`}

  ${tw`
    text-xs
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    transition
    duration-500
    ease-in-out
    hover:text-gray-700
  `}

  border: 1px solid red;
`

type Props = {
  task: Task;
}

function ListItem({ task }: Props) {
  return (
    <SItem>
      <div style={{border: 'solid 1px black'}}>{task.title}</div>
      <div style={{border: 'solid 1px green'}}>{task.description}</div>
      <When date={task.date}/>
      
    </SItem>
  )
}

export default ListItem