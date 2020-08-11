import React, { useState } from "react";
import { StyledBoard } from "./styles/StyledBoard";
import { StyledGameStatus } from "./styles/StyledGameStatus";
import Card from "./Card";

const Board = ({ collection, pickCard, check, won, timesUp }) => {
  console.log("timesUp", timesUp);
  return (
    <StyledBoard width={4} height={5}>
      {won ? (
        <StyledGameStatus>You Won!!</StyledGameStatus>
      ) : timesUp ? (
        <StyledGameStatus>Times Up!!</StyledGameStatus>
      ) : (
        ""
      )}
      {collection.map((collection, index) => (
        <Card
          check={check}
          pickCard={pickCard}
          key={index}
          index={index}
          card={collection}
        />
      ))}
    </StyledBoard>
  );
};

export default Board;
