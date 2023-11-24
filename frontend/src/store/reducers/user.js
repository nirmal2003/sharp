import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            return action.payload
        }
    },
})

export const { setUser } = userReducer.actions

export default userReducer.reducer