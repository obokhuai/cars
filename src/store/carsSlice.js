import { createSlice, nanoid } from "@reduxjs/toolkit";



const carsSlice = createSlice({
  name: "Car",
  initialState:{cars: [], searchTerm: ""},
  reducers: {
  searchChange: (state, action)=>{
  state.searchTerm = action.payload;
  },
  addCar: (state, action)=>{
  state.cars.push({
  name: action.payload.name,
  cost: action.payload.cost,
  id: nanoid()
  });
  },
  removeCar: (state, action)=>{
  state.cars = state.cars.filter(car => car.id !== action.payload);
  },
  },

})

export default carsSlice.reducer;
export const {searchChange, addCar, removeCar } = carsSlice.actions;