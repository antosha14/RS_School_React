import classes from "./Card.module.css";
import { Character } from "../../services/startrekApiCall";
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTheme } from "../../store/ThemeContext";

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
  const dispatch = useDispatch();
  const darkTheme = useTheme();

  // const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked === true) {
  //     dispatch(selectionActions.addEntryToSelected("UID"));
  //   } else {
  //     dispatch(selectionActions.deleteEntryFromSelected("UID"));
  //   }
  // };

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
        to={`/details/${props.uid}?page=${page}`}
        className={classes.learnMoreButton}
      >
        Learn more →
      </NavLink>
      <input
        type="checkbox"
        onChange={() => {
          console.log("Hi");
        }}
      ></input>
    </li>
  );
}

export default Card;
