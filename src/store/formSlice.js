import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: {name: " ", cost: 0},
  reducers: {
    nameChange: (state,action)=>{ 
    state.name = action.payload;
    },
    costChange: (state, action)=>{
    state.cost = action.payload;
    },
  },
})


export default formSlice.reducer;
export const { nameChange,costChange} = formSlice.actions;