import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

type Props = {}

function AppLayout({}: Props) {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default AppLayout