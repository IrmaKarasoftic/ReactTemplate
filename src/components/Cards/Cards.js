import React, { Component } from "react";
import Button from "../Shared/Button/Button";
import Card from "../Shared/Card/Card";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      cards: [],
    };
  }

  handleClick = () => {
    console.log("Clicked");
  };

  getCards = () => {
    const cards = [
      { key: 1, id: "1", imageSrc: "", text: "text1" },
      {
        key: 2,
        id: "2",
        imageSrc: "",
        text: "text2",
      },
      {
        key: 3,
        id: "3",
        imageSrc: "",
        text: "text3",
      },
    ];
    this.setState({ cards: cards });
  };
  async componentDidMount() {
    this.getCards();
  }

  render() {
    return (
      <>
        <div className="cards-wrapper">
          {this.state.cards.map((card) => {
            return (
              <Card key={card.key} imageSrc={card.imageSrc} text={card.text} />
            );
          })}
        </div>
      </>
    );
  }
}
