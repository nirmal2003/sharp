import { createSlice } from '@reduxjs/toolkit'

export const employeeUsersReducer = createSlice({
    name: 'employee_users',
    initialState: [],
    reducers: {
        setEmployeeUsers: (state, action) => {
            return action.payload
        }
    },
})

export const { setEmployeeUsers } = employeeUsersReducer.actions

export default employeeUsersReducer.reducer