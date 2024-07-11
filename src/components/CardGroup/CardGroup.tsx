import "./CardGroup.css";
import { Card } from "../index";
import { StartrekApiResponse, Character } from "../../services/startrekApiCall";
import { useState } from "react";

interface CardGroupProps {
  searchedElements: StartrekApiResponse | null;
}

function CardGroup(props: CardGroupProps) {
  const [charactersList] = useState<JSX.Element[] | null>(
    props.searchedElements?.characters
      ? props.searchedElements.characters.map(
          (character: Character, index: number) => {
            return (
              <Card
                cardData={character}
                key={character.uid}
                index={index + 1}
                uid={character.uid}
              ></Card>
            );
          },
        )
      : null,
  );

  return (
    <ul className="liContainer">
      {charactersList && charactersList.length != 0 ? (
        charactersList
      ) : (
        <li className="listItem">
          <span className="listDescription">
            There isn't any character with this name
          </span>
        </li>
      )}
    </ul>
  );
}

export default CardGroup;
