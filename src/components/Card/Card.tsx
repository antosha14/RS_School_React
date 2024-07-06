import { Component } from "react";
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

class Card extends Component<CardData> {
  constructor(props: CardData) {
    super(props);
  }

  description: string = `${this.props.index}. Name: ${this.props.cardData.name}. This ${this.props.cardData.earthAnimal ? "is" : "isn't"} Earth Animal. This is ${getSpecies(this.props.cardData)}`;

  render() {
    return <li>{this.description}</li>;
  }
}

export default Card;
