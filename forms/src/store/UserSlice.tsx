import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  gender?: string;
  terms?: string;
  picture?: string;
  country?: string;
}

interface UsersSlice {
  users: User[];
}

const initialState: UsersSlice = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
