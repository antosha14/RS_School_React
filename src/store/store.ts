import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from "./flyout";
import { apiSlice } from "../services/apiSlice";
import fetchedItemsReducer from "./pageItems";

const store = configureStore({
  reducer: {
    selection: selectionReducer,
    fetchedItems: fetchedItemsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
