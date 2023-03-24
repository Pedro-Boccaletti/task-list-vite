import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  date?: Date;
}

const DateContainer = styled.div`
  ${tw`inline-flex w-fit ml-2 justify-center rounded-3xl px-3 py-1 bg-gray-200`}
  ${tw`
    text-xs
    text-black
    font-light
    transition
    duration-500
    ease-in-out
    hover:text-gray-700
  `}
`

const getMonthString = (date: Date): [string, string] => {
  const monthLong = date.toLocaleDateString(undefined, { month: 'long' })
  const monthShort = date.toLocaleDateString(undefined, { month: 'short' })
  return [monthLong,monthShort]
}

const getWeekDay = (date: Date): string => {
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  return weekDays[date.getDay()]
}

function When({ date }: Props) {
  if (!date) return null
  const day = date.toLocaleDateString(undefined, { day: '2-digit' })
  const month = getMonthString(date)
  const year = date.getFullYear()
  const weekDay = getWeekDay(date)
  if (new Date().getFullYear() !== year) return (
    <DateContainer>{`${day} de ${month[0]} de ${year}`}</DateContainer>
  )

  return (
    <DateContainer>{`${weekDay}, ${day} de ${month[1]}`}</DateContainer>
  )
}

export default When