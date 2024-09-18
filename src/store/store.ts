import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectionReducer from "./flyout";
import fetchedItemsReducer from "./pageItems";

const rootReducer = combineReducers({
  selection: selectionReducer,
  fetchedItems: fetchedItemsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export default store;
