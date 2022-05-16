import React from "react";
import Button from "../Button/Button";
import "./card.css";

function Card(props) {
  const { id, imageSrc, text } = props;
  return (
    <>
      <div id={id} className="card-wrapper">
        <div className="card-image" src={imageSrc}></div>
        <div className="card-text">{text}</div>
        <div className="card-buttons">
          <Button
            label={"See more"}
            onClick={() => handleClick()}
            className="btn btn-default"
          ></Button>
        </div>
      </div>
    </>
  );
}
export default Card;
