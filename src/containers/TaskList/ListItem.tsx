import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import CheckBox from '../../components/CheckBox';
import { Task } from '../../typings/Task'
import { axiosReq } from '../../utils/axiosReq';
import When from './When';

const SItem = styled.div`
  ${tw`flex space-x-3 px-10 bg-gray-100 bg-gradient-to-b m-2 rounded-2xl py-3`}
  min-width: 30%
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

const SCheckBox = styled(CheckBox)`
  ${tw`mt-3 h-4 w-4`}

  :checked {
    ${tw`bg-blue-600`}

    :hover {
      ${tw`bg-blue-800`}
    }
  }
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
      <SCheckBox forwardRef={checkRef} onChange={(e) => {
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