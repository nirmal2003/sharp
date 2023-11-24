import { createSlice } from '@reduxjs/toolkit'

export const colorsReducer = createSlice({
    name: 'colors',
    initialState: [],
    reducers: {
        setColors: (state, action) => {
            return action.payload
        }
    },
})

export const { setColors } = colorsReducer.actions

export default colorsReducer.reducer