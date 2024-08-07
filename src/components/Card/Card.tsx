import Link from "next/link";
import classes from "./Card.module.css";
import { Character } from "../../services/apiSlice";
import { useTheme } from "../../contexts/ThemeContext";
import ToggleAddStatusButton from "../ToggleAddStatusButton/ToggleAddStatusButton";
import useQueryParams from "../../hooks/useQueryParams";

interface CardData {
  cardData: Character;
  key: string;
  index: number;
  uid: string;
}

function Card(props: CardData) {
  const description: string = `${props.index}. ${props.cardData.name}`;
  const { currentPage, currentQuery } = useQueryParams();
  const page = currentPage;
  const query = currentQuery;

  const darkTheme = useTheme();

  return (
    <li className={classes.listItem}>
      <span
        className={
          darkTheme ? classes.listDescription : classes.listDescriptionLight
        }
      >
        {description}
      </span>
      <Link
        href={`/?query=${query}&page=${page}&details=${props.uid}`}
        className={classes.learnMoreButton}
      >
        Learn more →
      </Link>
      <ToggleAddStatusButton character={props.cardData}></ToggleAddStatusButton>
    </li>
  );
}

export default Card;
