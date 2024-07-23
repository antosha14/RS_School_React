import { createSlice } from "@reduxjs/toolkit";
import charactersToCsv from "../services/charactersToCsv";

const characterArray = [
  {
    uid: "CHMA0000215045",
    name: "0413 Theta",
    gender: null,
    yearOfBirth: null,
    monthOfBirth: null,
    dayOfBirth: null,
    placeOfBirth: null,
    yearOfDeath: null,
    monthOfDeath: null,
    dayOfDeath: null,
    placeOfDeath: null,
    height: null,
    weight: null,
    deceased: null,
    bloodType: null,
    maritalStatus: null,
    serialNumber: null,
    hologramActivationDate: null,
    hologramStatus: null,
    hologramDateStatus: null,
    hologram: false,
    fictionalCharacter: false,
    mirror: true,
    alternateReality: false,
  },
  {
    uid: "CHMA0000174718",
    name: "0718",
    gender: "M",
    yearOfBirth: 2259,
    monthOfBirth: null,
    dayOfBirth: null,
    placeOfBirth: null,
    yearOfDeath: null,
    monthOfDeath: null,
    dayOfDeath: null,
    placeOfDeath: null,
    height: null,
    weight: null,
    deceased: null,
    bloodType: null,
    maritalStatus: null,
    serialNumber: null,
    hologramActivationDate: null,
    hologramStatus: null,
    hologramDateStatus: null,
    hologram: false,
    fictionalCharacter: false,
    mirror: false,
    alternateReality: true,
  },
  {
    uid: "CHMA0000283851",
    name: "10111",
    gender: null,
    yearOfBirth: null,
    monthOfBirth: null,
    dayOfBirth: null,
    placeOfBirth: null,
    yearOfDeath: null,
    monthOfDeath: null,
    dayOfDeath: null,
    placeOfDeath: null,
    height: null,
    weight: null,
    deceased: null,
    bloodType: null,
    maritalStatus: null,
    serialNumber: null,
    hologramActivationDate: null,
    hologramStatus: null,
    hologramDateStatus: null,
    hologram: false,
    fictionalCharacter: false,
    mirror: false,
    alternateReality: false,
  },
  {
    uid: "CHMA0000278055",
    name: "335",
    gender: null,
    yearOfBirth: null,
    monthOfBirth: null,
    dayOfBirth: null,
    placeOfBirth: null,
    yearOfDeath: null,
    monthOfDeath: null,
    dayOfDeath: null,
    placeOfDeath: null,
    height: null,
    weight: null,
    deceased: null,
    bloodType: null,
    maritalStatus: null,
    serialNumber: null,
    hologramActivationDate: null,
    hologramStatus: null,
    hologramDateStatus: null,
    hologram: false,
    fictionalCharacter: false,
    mirror: false,
    alternateReality: false,
  },
  {
    uid: "CHMA0000282741",
    name: "355",
    gender: null,
    yearOfBirth: null,
    monthOfBirth: null,
    dayOfBirth: null,
    placeOfBirth: null,
    yearOfDeath: null,
    monthOfDeath: null,
    dayOfDeath: null,
    placeOfDeath: null,
    height: null,
    weight: null,
    deceased: null,
    bloodType: null,
    maritalStatus: null,
    serialNumber: null,
    hologramActivationDate: null,
    hologramStatus: null,
    hologramDateStatus: null,
    hologram: false,
    fictionalCharacter: false,
    mirror: false,
    alternateReality: false,
  },
];

const selectedSlice = createSlice({
  name: "selection",
  initialState: { selectedNumberOfEntries: 0, entriesSelected: [""] },
  reducers: {
    addEntryToSelected(state, action) {
      state.entriesSelected.push(action.payload);
      state.selectedNumberOfEntries = state.entriesSelected.length - 1;
    },
    deleteEntryFromSelected(state, action) {
      const index = state.entriesSelected.indexOf(action.payload);
      state.entriesSelected.splice(index, 1);
      state.selectedNumberOfEntries = state.entriesSelected.length - 1;
    },
    downloadAllSelectedEntries(state) {
      const charactersCsv = charactersToCsv(characterArray);
      const csvURL = URL.createObjectURL(charactersCsv);
      const link = document.createElement("a");
      link.href = csvURL;
      link.download = `${state.selectedNumberOfEntries}_characters.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    unselectAllEntries(state) {
      state.entriesSelected = [""];
      state.selectedNumberOfEntries = 0;
    },
  },
});

export const flyoutActions = selectedSlice.actions;
export default selectedSlice.reducer;
