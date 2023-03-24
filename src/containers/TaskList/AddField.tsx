import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useAppSelector } from '../../redux/hooks'
import { axiosReq } from '../../utils/axiosReq'
import DateTimePicker from 'react-datetime-picker'

const SAddField = styled.fieldset`
  ${tw`flex p-2 gap-2 flex-col md:flex-row`}
`

const AddInput = styled(Input)`
  height: 4rem;
`

const SDateTimePicker = styled(DateTimePicker)`
  ${tw`border-2 rounded-2xl p-4 w-12 md:w-auto`}

  .react-datetime-picker__wrapper {
    border: none;
  }
`

type Props = {}

function AddField({}: Props) {
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const [disabled, setDisabled] = useState<boolean>(true)
  const [date, setDate] = useState<Date>()
  const user = useAppSelector(s => s.userSlice.user)


  return (
    <SAddField>
      <AddInput 
        name='Titulo'
        forwardRef={titleRef}
        onChange={(e) => {
          setDisabled(!e.target.value)
        }}
      />
      <AddInput 
        name='Descrição'
        forwardRef={descriptionRef}
      />
      <SDateTimePicker
        onChange={setDate}
        value={date}
        format='dd/MM/yyyy HH:mm'
      />
      <Button
        name='Adicionar'
        type='button'
        disabled={disabled}
        click={async () => {
          if (!(titleRef.current && descriptionRef.current)) return;
          try {
            const {status} = await axiosReq().post('/task', {
              title: titleRef.current.value,
              description: descriptionRef.current.value,
              time: date,
              userId: user.id,
            })
            
            titleRef.current.value = ''
            descriptionRef.current.value = ''
            setDisabled(true)
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </SAddField>
  )
}

export default AddField
