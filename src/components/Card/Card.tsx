import classes from "./Card.module.css";
import { Character } from "../../services/apiSlice";
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "../../store/ThemeContext";
import ToggleAddStatusButton from "../ToggleAddStatusButton/ToggleAddStatusButton";

interface CardData {
  cardData: Character;
  key: string;
  index: number;
  uid: string;
}

function Card(props: CardData) {
  const description: string = `${props.index}. ${props.cardData.name}`;
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const query = searchParams.get("query")
    ? String(searchParams.get("query"))
    : "";
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
      <NavLink
        to={`/details/${props.uid}?query=${query}&page=${page}`}
        className={classes.learnMoreButton}
      >
        Learn more →
      </NavLink>
      <ToggleAddStatusButton character={props.cardData}></ToggleAddStatusButton>
    </li>
  );
}

export default Card;
