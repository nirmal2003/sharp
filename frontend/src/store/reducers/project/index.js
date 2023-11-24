import { createSlice } from '@reduxjs/toolkit'

export const projectsReducer = createSlice({
    name: 'projects',
    initialState: null,
    reducers: {
        setProjects: (state, action) => {
            return action.payload
        }
    },
});

export const { setProjects } = projectsReducer.actions

export default projectsReducer.reducer