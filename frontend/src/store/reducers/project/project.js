import { createSlice } from '@reduxjs/toolkit'

export const projectReducer = createSlice({
    name: 'project',
    initialState: null,
    reducers: {
        setProject: (state, action) => {
            return action.payload
        }
    }
});

export const { setProject } = projectReducer.actions

export default projectReducer.reducer