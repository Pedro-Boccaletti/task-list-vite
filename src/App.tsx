import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import List from './containers/TaskList/List'
import LoginForm from './containers/Login/LoginForm'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './containers/AppLayout/AppLayout'
import RegisterForm from './containers/Register/RegisterForm'

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
  `}
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`


function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/app' element={<AppLayout />}>
          <Route path='tasks' element={<List />} />
        </Route>
      </Routes>
    </AppContainer>
  )
}

export default App
