import classes from "./CardGroup.module.css";
import { Card } from "../index";
import { StartrekApiResponse, Character } from "../../services/startrekApiCall";
import { useState, JSX } from "react";
import { NavigationBar } from "../index";
import { useSearchParams } from "react-router-dom";

interface CardGroupProps {
  searchedElements: StartrekApiResponse | null;
}

interface CardGroupState {
  searchedElements: JSX.Element[] | null;
  depth: number;
}

function CardGroup(props: CardGroupProps) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const [charactersList] = useState<CardGroupState>({
    searchedElements: props.searchedElements?.characters
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
    depth:
      props.searchedElements?.characters &&
      props.searchedElements?.characters.length !== 0
        ? Math.ceil(props.searchedElements.characters.length / 10)
        : 1,
  });

  return (
    <>
      <ul className={classes.liContainer}>
        {charactersList.searchedElements &&
        charactersList.searchedElements.length != 0 &&
        page ? (
          charactersList.searchedElements.slice(
            Number(page) * 10 - 10,
            Math.min(Number(page) * 10, charactersList.searchedElements.length),
          )
        ) : (
          <li className={classes.notFoundContainer}>
            <span className={""}>There isn't any character with this name</span>
          </li>
        )}
      </ul>
      {charactersList.searchedElements &&
      charactersList.searchedElements.length != 0 ? (
        <NavigationBar depth={charactersList.depth}></NavigationBar>
      ) : (
        ""
      )}
    </>
  );
}

export default CardGroup;
