import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { axiosReq } from '../../utils/axiosReq'
import { setUser } from '../../redux/slices/userSlice'
import { User } from '../../typings/User'
import { useAppDispatch } from '../../redux/hooks'
import { useNavigate } from 'react-router-dom'

type Props = {}

const FormInput = styled(Input<string>)`
  ${tw`border-cyan-300 m-5`}
  width: 20rem;
`

const FormButton = styled(Button)`
  width: 16rem;
`

const SForm = styled.form`
  ${tw`flex flex-col justify-center items-center`}
`

function LoginForm({}: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <SForm
      onSubmit={async (e) => {
        e.preventDefault();
        if (!emailRef.current || !passwordRef.current) return;
        try {
          const {data} = await axiosReq().post('/login', {
             email: emailRef.current.value,
             password: passwordRef.current.value,
          })
          dispatch(setUser(data as User));
          navigate('/tasks');
          
        } catch (error) {
          console.log(error);
        }
        
      }}
    >
      <FormInput
        name='Email'
        type='email'
        forwardRef={emailRef}
      />
      <FormInput
        name='Senha'
        type='password'
        forwardRef={passwordRef}
      />
      <FormButton name='Login'/>
    </SForm>
  )
}

export default LoginForm