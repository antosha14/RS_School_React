"use client";

import classes from "./CardGroup.module.css";
import { Card } from "../index";
import { StartrekApiResponse, Character } from "../../services/apiSlice";
import { useState, JSX } from "react";
import { NavigationBar } from "../index";
import useQueryParams from "../../hooks/useQueryParams";
import { useTheme } from "../../contexts/ThemeContext";

interface CardGroupProps {
  searchedElements: StartrekApiResponse | null;
  depth: number;
}

interface CardGroupState {
  searchedElements: JSX.Element[] | null;
  depth: number;
}

function CardGroup(props: CardGroupProps) {
  const { currentPage } = useQueryParams();
  const page = currentPage;
  const darkTheme = useTheme();
  const [charactersList] = useState<CardGroupState>({
    searchedElements: props.searchedElements?.characters
      ? props.searchedElements.characters.map(
          (character: Character, index: number) => {
            return (
              <Card
                cardData={character}
                key={character.uid}
                index={index + 1 + (Number(page) - 1) * 10}
                uid={character.uid}
              ></Card>
            );
          },
        )
      : null,
    depth: props.depth !== 0 ? props.depth : 1,
  });

  return (
    <>
      <ul className={classes.liContainer}>
        {charactersList.searchedElements &&
        charactersList.searchedElements.length != 0 &&
        page ? (
          charactersList.searchedElements
        ) : (
          <li
            className={
              darkTheme
                ? classes.notFoundContainer
                : classes.notFoundContainerLight
            }
          >
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
