import { createSlice } from '@reduxjs/toolkit'

export const employeesRoleReducer = createSlice({
    name: 'employees_role',
    initialState: [],
    reducers: {
        setEmployeesRole: (state, action) => {
            return action.payload
        }
    },
})

export const { setEmployeesRole } = employeesRoleReducer.actions

export default employeesRoleReducer.reducer