import { createSlice } from "@reduxjs/toolkit";

const viewStateSlice = createSlice({
  name: "flyout",
  initialState: { showFlyout: false },
  reducers: {
    showFlyout(state) {
      state.showFlyout = true;
    },
    hideFlyout(state) {
      state.showFlyout = false;
    },
  },
});

export const viewStateActions = viewStateSlice.actions;
export default viewStateSlice.reducer;
