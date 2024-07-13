import { useLoaderData, NavLink, useSearchParams } from "react-router-dom";
import classnames from "./DetailedCard.module.css";
import { Character } from "../../services/detailedDataApiCall";
import { useNavigate } from "react-router-dom";

function DetailedCard() {
  const character = useLoaderData() as Character;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  return (
    <>
      <div className={classnames.detailedCardContainer}>
        <div className={classnames.detailedCardItem}>
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
      <div
        className={classnames.appWrapper}
        onClick={() => {
          navigate(`/?page=${page}`);
        }}
      ></div>
    </>
  );
}

export default DetailedCard;
