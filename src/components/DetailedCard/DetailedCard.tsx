"use client";

import Link from "next/link";
import classnames from "./DetailedCard.module.css";
import { Character } from "../../services/apiSlice";
import { useRouter } from "next/navigation";

function DetailedCard({
  character,
  searchParams,
}: {
  character: Character;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();
  const query = searchParams["query"] ? String(searchParams["query"]) : "";
  const page = searchParams["page"] ? Number(searchParams["page"]) : 1;

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
