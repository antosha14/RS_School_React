import { Component } from "react";
import "./CardGroup.css";
import { Card } from "../index";
import { StartrekApiResponse, Animal } from "../../services/startrekApiCall";

interface CardGroupProps {
  searchedElements: StartrekApiResponse | null;
}

interface CardGroupState {
  animalsList: JSX.Element[] | null;
}

class CardGroup extends Component<CardGroupProps, CardGroupState> {
  constructor(props: CardGroupProps) {
    super(props);
    this.state = {
      animalsList: this.props.searchedElements?.animals
        ? this.props.searchedElements.animals.map(
            (animal: Animal, index: number) => {
              return (
                <Card
                  cardData={animal}
                  key={animal.uid}
                  index={index + 1}
                ></Card>
              );
            },
          )
        : null,
    };
  }

  render() {
    return (
      <ul>
        {this.state.animalsList && this.state.animalsList.length != 0
          ? this.state.animalsList
          : "There isn't any animal with this name"}
      </ul>
    );
  }
}

export default CardGroup;
