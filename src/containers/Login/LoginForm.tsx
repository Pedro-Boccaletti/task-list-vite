import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { axiosReq } from '../../utils/axiosReq'
import { setUser } from '../../redux/slices/userSlice'
import { User } from '../../typings/User'
import { useAppDispatch } from '../../redux/hooks'

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  return (
    <SForm
      onSubmit={async (e) => {
        e.preventDefault();
        
        try {
          const {data} = await axiosReq().post('/login', {
             email,
             password,
          })
          dispatch(setUser(data as User));
          
        } catch (error) {
          console.log(error);
        }
        
      }}
    >
      <FormInput
        name='Email'
        change={[email, setEmail]}
        type='email'
      />
      <FormInput
        name='Senha'
        change={[password, setPassword]}
        type='password'
      />
      <FormButton name='Login'/>
    </SForm>
  )
}

export default LoginForm