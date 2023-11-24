import { createSlice } from '@reduxjs/toolkit'

export const employeeInvitesReducer = createSlice({
    name: 'employees_invites',
    initialState: [],
    reducers: {
        setEmployeesInvites: (state, action) => {
            return action.payload
        }
    },
})

export const { setEmployeesInvites } = employeeInvitesReducer.actions

export default employeeInvitesReducer.reducer