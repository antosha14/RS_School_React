import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectionReducer from "./flyout";
import { apiSlice } from "../services/apiSlice";
import fetchedItemsReducer from "./pageItems";

const rootReducer = combineReducers({
  selection: selectionReducer,
  fetchedItems: fetchedItemsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export default store;
