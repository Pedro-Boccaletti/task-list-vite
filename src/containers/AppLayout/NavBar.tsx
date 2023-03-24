import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks'
import { resetState } from '../../redux/slices/userSlice'

type Props = {}

function NavBar({}: Props) {
  const dispatch = useAppDispatch()

  return (
    <div>
      <Link to={'/'} onClick={() => { dispatch(resetState()) }}>Logout</Link>
    </div>
  )
}

export default NavBar
