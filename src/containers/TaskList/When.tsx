import React from 'react'
// import { Date } from '../typings/Item'

type Props = {
  date?: Date;
}

function When({ date }: Props) {
  return (
    <div>{date?.toUTCString()}</div>
  )
}

export default When