import { createSlice } from '@reduxjs/toolkit'

export const taskOptionsReducer = createSlice({
    name: 'task_options',
    initialState: [],
    reducers: {
        setOptions: (state, action) => {
            return action.payload
        }
    },
});

export const { setOptions } = taskOptionsReducer.actions

export default taskOptionsReducer.reducer