import React, { useState } from "react";
import { StyledCard } from "./styles/StyledCard";
import "./styles/card.css";

const Card = ({ card, pickCard, index, check }) => {
  const pick = (index) => {
    if (!check && card[2] !== "matched") {
      pickCard(index);
    }
  };

  return (
    <StyledCard
      onClick={() => pick(index)}
      className={`card ${card[2] === "unmatch" ? "" : "flip"}`}
    >
      <div className="front">
        <img className="cardFront" src={require("./images/wheel.png")} />
      </div>
      <div className="back">
        {card[1] === "pic" ? (
          <img src={require(`./images/${card[3]}`)} width="100%" />
        ) : (
          card[0]
        )}
      </div>
    </StyledCard>
  );
};
export default Card;
