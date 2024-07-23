import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from "./flyout";
import { apiSlice } from "../services/apiSlice";

const store = configureStore({
  reducer: {
    selection: selectionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
