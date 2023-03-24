import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../typings/User'

const initialState: {user: User} = {
  user: {
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetState: (state) => {
      state.user = { ...initialState.user };
    }
  }
})

export const { setUser, resetState } = userSlice.actions;

export default userSlice.reducer;
