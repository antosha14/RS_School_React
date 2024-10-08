import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../services/apiSlice";

interface State {
  selectedNumberOfEntries: number;
  entriesSelected: Character[];
}

const initialState: State = {
  selectedNumberOfEntries: 0,
  entriesSelected: [],
};

const selectedSlice = createSlice({
  name: "selection",
  initialState: initialState,
  reducers: {
    addEntryToSelected(state, action) {
      state.entriesSelected.push(action.payload);
      state.selectedNumberOfEntries = state.entriesSelected.length;
    },
    deleteEntryFromSelected(state, action) {
      const index = state.entriesSelected.findIndex(
        (currentObject) => currentObject.uid === action.payload.uid,
      );
      if (index !== -1) {
        state.entriesSelected.splice(index, 1);
        state.selectedNumberOfEntries = state.entriesSelected.length;
      }
    },
    unselectAllEntries(state) {
      state.entriesSelected = [];
      state.selectedNumberOfEntries = 0;
    },
  },
});

export const flyoutActions = selectedSlice.actions;
export const {
  addEntryToSelected,
  deleteEntryFromSelected,
  unselectAllEntries,
} = selectedSlice.actions;
export default selectedSlice.reducer;
