import Link from "next/link";
import classnames from "./DetailedCard.module.css";
import { Character } from "../../services/apiSlice";
import { useRouter } from "next/router";
import useQueryParams from "../../hooks/useQueryParams";

function DetailedCard({ character }: { character: Character }) {
  const router = useRouter();
  const { currentQuery, currentPage } = useQueryParams();
  const query = currentQuery;
  const page = currentPage;

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
          <Link
            className={classnames.closeButton}
            href={`/?query=${query}&page=${page}`}
          >
            Close
          </Link>
        </div>
      </div>
      <div
        className={classnames.appWrapper}
        data-testid="app-wrapper"
        onClick={() => {
          router.push(`/?query=${query}&page=${page}`);
        }}
      ></div>
    </>
  );
}

export default DetailedCard;
