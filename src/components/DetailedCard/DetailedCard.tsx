import { useLoaderData, NavLink, useSearchParams } from "react-router-dom";
import classes from "./DetailedCard.module.css";
import { Character } from "../../services/detailedDataApiCall";

function DetailedCard() {
  const character = useLoaderData() as Character;
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  return (
    <div className={classes.detailedCardContainer}>
      <div className={classes.detailedCardItem}>
        <p>{`Name: ${character.name}`}</p>
        <p>{`Gender: ${character.gender}`}</p>
        <p>{`Birth year: ${character.yearOfBirth}`}</p>
        <p>{`Birth place: ${character.placeOfBirth}`}</p>
        <p>{`Height: ${character.height}`}</p>
        <p>{`Weight: ${character.weight}`}</p>
        <p>{`Marital status: ${character.maritalStatus}`}</p>
        <NavLink to={`/?page=${page}`}>Close</NavLink>
      </div>
    </div>
  );
}

export default DetailedCard;
