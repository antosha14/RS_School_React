import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../services/apiSlice";

interface State {
  characters: Character[];
  detailedCharacter: Character | string;
}

const initialState: State = {
  characters: [],
  detailedCharacter: "",
};

const fetchedItemsSlice = createSlice({
  name: "fetchedItems",
  initialState: initialState,
  reducers: {
    addFetchedCharactersToStore(state, action) {
      state.characters = action.payload;
    },
    addFetchedDetailedCharacterToStore(state, action) {
      state.detailedCharacter = action.payload;
    },
  },
});

export const fetchedItemsActions = fetchedItemsSlice.actions;
export const {
  addFetchedCharactersToStore,
  addFetchedDetailedCharacterToStore,
} = fetchedItemsSlice.actions;
export default fetchedItemsSlice.reducer;
