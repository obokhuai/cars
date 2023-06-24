import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import carsSlice from "./carsSlice";



const store = configureStore({
  reducer: {
  form:formSlice,
  car:carsSlice
  }
})


export default store;