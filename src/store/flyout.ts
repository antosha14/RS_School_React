import { createSlice } from "@reduxjs/toolkit";

interface selectedStore {
  selectedNumberOfEntries: number;
}

const selectedSlice = createSlice({
  name: "selected",
  initialState: { selectedNumberOfEntries: 0, entriesSelected: [] },
  reducers: {
    addEntryToSelected(state, action) {
      action.payload;
    },
    deleteEntryFromSelected(state, action) {
      action.payload;
    },
    downloadAllSelectedEntries() {},
    unselectAllEntries() {},
  },
});

export const flyoutActions = selectedSlice.actions;
export default selectedSlice.reducer;
