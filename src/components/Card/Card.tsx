import "./Card.css";
import { Animal } from "../../services/startrekApiCall";

interface CardData {
  cardData: Animal;
  key: string;
  index: number;
}

function getSpecies(animal: Animal): string {
  if (animal.earthInsect) {
    return "Insect";
  } else if (animal.avian) {
    return "Avian";
  } else if (animal.canine) {
    return "Canine";
  } else if (animal.feline) {
    return "Feline";
  } else {
    return "an animal of undefined species";
  }
}

function Card(props: CardData) {
  const description: string = `${props.index}. ${props.cardData.name}. This ${props.cardData.earthAnimal ? "is" : "isn't"} Earth Animal. This is ${getSpecies(props.cardData)}`;

  return (
    <li className="listItem">
      <span className="listDescription">{description}</span>
    </li>
  );
}

export default Card;
