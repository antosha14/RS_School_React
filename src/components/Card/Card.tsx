import classes from "./Card.module.css";
import { Character } from "../../services/startrekApiCall";
import { NavLink } from "react-router-dom";

interface CardData {
  cardData: Character;
  key: string;
  index: number;
  uid: string;
}

function Card(props: CardData) {
  const description: string = `${props.index}. ${props.cardData.name}`;

  return (
    <li className={classes.listItem}>
      <span className={classes.listDescription}>{description}</span>
      <NavLink to={`/details/${props.uid}`} className={classes.learnMoreButton}>
        Learn more →
      </NavLink>
    </li>
  );
}

export default Card;
