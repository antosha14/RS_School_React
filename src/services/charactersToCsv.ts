import { Character } from "./detailedDataApiCall";

const charactersToCsv = (characters: Character[]) => {
  const headerOfCsvFile = Object.keys(characters[0]).join(",") + "\n";
  const rows = characters
    .map((character) => Object.values(character).join(","))
    .join("\n");
  const csvContent = headerOfCsvFile + rows;
  return new Blob([csvContent], { type: "text/csv" });
};

export default charactersToCsv;
