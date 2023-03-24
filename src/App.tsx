import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import List from './containers/TaskList/List';
import LoginForm from './containers/Login/LoginForm';
import { Route, Routes } from 'react-router-dom';

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
  `}
  height: 100vh;
  width: 100vw;
`;


function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/tasks' element={<List />} />
      </Routes>
    </AppContainer>
  )
}

export default App;
