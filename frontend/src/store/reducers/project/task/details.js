import { createSlice } from '@reduxjs/toolkit'

export const taskDetailsReducer = createSlice({
    name: 'task_details',
    initialState: null,
    reducers: {
        setTaskId: (state, action) => {
            return action.payload
        }
    },
});

export const { setTaskId } = taskDetailsReducer.actions

export default taskDetailsReducer.reducer