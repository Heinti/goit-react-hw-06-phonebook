import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = ""

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers:{
        getFilterValue: (state, action)=> {
         state = action.payload
        }
    }
})

export const {getFilterValue} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;