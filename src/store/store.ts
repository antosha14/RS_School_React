import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from "./flyout";
import viewStateReducer from "./viewState";

const store = configureStore({
  reducer: {
    selection: selectionReducer,
    viewState: viewStateReducer,
  },
});

export default store;
