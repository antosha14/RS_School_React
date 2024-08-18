import { type RootState } from "./store";

export const selectUsers = (state: RootState) => state.users.users;
export const selectCountries = (state: RootState) => state.country;
