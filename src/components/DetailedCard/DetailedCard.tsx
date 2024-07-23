import { NavLink, useOutletContext, useSearchParams } from "react-router-dom";
import classnames from "./DetailedCard.module.css";
import { Character } from "../../services/detailedDataApiCall";
import { useNavigate } from "react-router-dom";

interface OutletContextProps {
  character: Character;
}

function DetailedCard() {
  const { character } = useOutletContext<OutletContextProps>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  return (
    <>
      <div className={classnames.detailedCardContainer}>
        <div className={classnames.detailedCardItem}>
          <p
            className={classnames.descriptionItem}
          >{`Name: ${character.name}`}</p>
          <p
            className={classnames.descriptionItem}
          >{`Gender: ${character.gender == null ? "no information" : character.gender}`}</p>
          <p
            className={classnames.descriptionItem}
          >{`Birth year: ${character.yearOfBirth == null ? "no information" : character.yearOfBirth}`}</p>
          <p
            className={classnames.descriptionItem}
          >{`Birth place: ${character.placeOfBirth == null ? "no information" : character.placeOfBirth}`}</p>
          <p
            className={classnames.descriptionItem}
          >{`Height: ${character.height == null ? "no information" : character.height}`}</p>
          <p
            className={classnames.descriptionItem}
          >{`Weight: ${character.weight == null ? "no information" : character.weight}`}</p>
          <p
            className={classnames.descriptionItem}
          >{`Marital status: ${character.maritalStatus == null ? "no information" : character.maritalStatus}`}</p>
          <NavLink className={classnames.closeButton} to={`/?page=${page}`}>
            Close
          </NavLink>
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
