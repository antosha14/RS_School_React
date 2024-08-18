import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./UserSlice";
import { countryReducer } from "./CountrySlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    country: countryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["users/addUser"],
        ignoredPaths: ["users.users"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
