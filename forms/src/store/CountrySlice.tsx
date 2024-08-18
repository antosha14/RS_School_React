import { createSlice } from "@reduxjs/toolkit";
import { countryList } from "@models/countryList";

const countrySlice = createSlice({
  name: "country",
  initialState: countryList,
  reducers: {},
});

export const countryReducer = countrySlice.reducer;
