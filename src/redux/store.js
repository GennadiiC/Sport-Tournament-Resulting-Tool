import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import footballSliceReducer from "./footballSlice";

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, footballSliceReducer)

export const store = configureStore({
  reducer: {
    football: persistedReducer
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)