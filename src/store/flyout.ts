import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
  name: "selection",
  initialState: { selectedNumberOfEntries: 0, entriesSelected: [""] },
  reducers: {
    addEntryToSelected(state, action) {
      state.entriesSelected.push(action.payload);
    },
    deleteEntryFromSelected(state, action) {
      const index = state.entriesSelected.indexOf(action.payload);
      state.entriesSelected.splice(index, 1);
    },
    downloadAllSelectedEntries() {},
    unselectAllEntries() {},
  },
});

export const flyoutActions = selectedSlice.actions;
export default selectedSlice.reducer;
