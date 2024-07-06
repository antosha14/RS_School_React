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

class CardGroup extends Component<CardGroupProps> {
  constructor(props: CardGroupProps) {
    super(props);
  }

  state: CardGroupState = {
    animalsList: null,
  };

  componentDidUpdate(prevProps: CardGroupProps) {
    if (prevProps.searchedElements !== this.props.searchedElements) {
      this.setState({
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
      });
    }
  }

  render() {
    return (
      <ul>{this.state.animalsList ? this.state.animalsList : "Not Found"}</ul>
    );
  }
}

export default CardGroup;
