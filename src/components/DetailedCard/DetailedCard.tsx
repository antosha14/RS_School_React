import { useNavigation, useLoaderData } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import classes from "./DetailedCard.module.css";
import { Character } from "../../services/detailedDataApiCall";

function DetailedCard() {
  const navigation = useNavigation();
  const character = useLoaderData() as Character;
  return (
    <div className={classes.detailedCardContainer}>
      {navigation.state === "loading" ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className={classes.detailedCardItem}>
          <p>{`Name: ${character.name}`}</p>
          <p>{`Gender: ${character.gender}`}</p>
          <p>{`Birth year: ${character.yearOfBirth}`}</p>
          <p>{`Birth place: ${character.placeOfBirth}`}</p>
          <p>{`Height: ${character.height}`}</p>
          <p>{`Weight: ${character.weight}`}</p>
          <p>{`Marital status: ${character.maritalStatus}`}</p>
        </div>
      )}
    </div>
  );
}

export default DetailedCard;
