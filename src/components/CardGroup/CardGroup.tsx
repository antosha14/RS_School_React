import "./CardGroup.css";
import { Card } from "../index";
import { StartrekApiResponse, Animal } from "../../services/startrekApiCall";
import { useState } from "react";

interface CardGroupProps {
  searchedElements: StartrekApiResponse | null;
}

function CardGroup(props: CardGroupProps) {
  const [animalsList] = useState<JSX.Element[] | null>(
    props.searchedElements?.animals
      ? props.searchedElements.animals.map((animal: Animal, index: number) => {
          return (
            <Card cardData={animal} key={animal.uid} index={index + 1}></Card>
          );
        })
      : null,
  );

  return (
    <ul className="liContainer">
      {animalsList && animalsList.length != 0 ? (
        animalsList
      ) : (
        <li className="listItem">
          <span className="listDescription">
            There isn't any animal with this name
          </span>
        </li>
      )}
    </ul>
  );
}

export default CardGroup;
