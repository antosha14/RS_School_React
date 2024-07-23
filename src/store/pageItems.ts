import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../services/detailedDataApiCall";

interface State {
  characters: Character[];
}

const initialState: State = {
  characters: [],
};

const fetchedItemsSlice = createSlice({
  name: "fetchedItems",
  initialState: initialState,
  reducers: {
    addFetchedCharactersToStore(state, action) {
      state.characters.push(action.payload);
    },
  },
});

export const fetchedItemsActions = fetchedItemsSlice.actions;
export default fetchedItemsSlice.reducer;
