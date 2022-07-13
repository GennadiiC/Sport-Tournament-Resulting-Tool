import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import footballSliceReducer from "./footballSlice";

export const store = configureStore({
  reducer: {
    football: footballSliceReducer
  },
  
})

setupListeners(store.dispatch)