import React, { useState, useEffect } from "react";
import { StyledBackground } from "./styles/StyledBackground";
import { StyledWrapper } from "./styles/StyledWrapper";
import { StyledButton } from "./styles/StyledButton";
import { cardCollection, shuffledCardCollection } from "../gameHelpers";
import Display from "./Display";
import { useTimer } from "../hooks/useTimer";
import Board from "./Board";
const cloneDeep = require("lodash/cloneDeep");

let firstCard = "";
let firstCardIndex = "";
let secondCard = "";
let secondCardIndex = "";
let cardOrder = 1;
let newCard = [];
function MixMatch() {
  const [newGame, setNewGame] = useState(false);
  const [card, setCard] = useState(cardCollection);
  const [check, setCheck] = useState(false);
  const [won, setWon] = useState(false);
  const [point, setPoint] = useState(0);
  const [time, setTime, active, setActive, timesUp, setTimesUp] = useTimer(
    false
  );
  console.log(timesUp);
  const startGame = () => {
    setNewGame(true);
    setActive(true);
    setTime(90);
    setCard(shuffledCardCollection);
    playAudio();
  };

  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio")[0];
    console.log(audioEl);
    audioEl.play();
  };

  const matching = (val) => {
    newCard = cloneDeep(card);
    if (cardOrder === 1) {
      firstCardIndex = val;
      firstCard = newCard[firstCardIndex];
      firstCard[2] = "matching";
      console.log(firstCard);
      cardOrder++;
      setCard(newCard);
    } else {
      secondCardIndex = val;
      if (secondCardIndex === firstCardIndex) return false;
      secondCard = newCard[secondCardIndex];
      firstCard = newCard[firstCardIndex];
      firstCard[2] = "matching";
      secondCard[2] = "matching";
      cardOrder = 1;
      setCard(newCard);
      setCheck(true);
    }
  };

  useEffect(() => {
    checkMatch();
    return () => {
      console.log("yes");
    };
  }, [check]);
  const checkMatch = () => {
    if (!check) return false;
    if (newCard.map)
      if (firstCard[0] === secondCard[0]) {
        firstCard[2] = "matched";
        secondCard[2] = "matched";
        setCard(newCard);
        setCheck(false);
        setPoint(10);
        const checkResult = newCard.filter((card) => card[2] === "matched");
        console.log(checkResult.length);
        if (checkResult.length === 20) {
          setWon(true);
          setActive(false);
        }
      } else {
        setTimeout(() => {
          console.log("yes");
          newCard = cloneDeep(card);
          secondCard = newCard[secondCardIndex];
          firstCard = newCard[firstCardIndex];
          firstCard[2] = "unmatch";
          secondCard[2] = "unmatch";
          setCard(newCard);
          setCheck(false);
        }, 500);
      }
  };

  return (
    <StyledBackground>
      <audio
        className="audio"
        src={require("./music/If_I_Had_a_Chicken.mp3")}
        type="audio/mpeg"
        autoPlay
        loop
      />

      <StyledWrapper>
        <h1 className="title">Mix & Match</h1>
        {!newGame ? (
          <StyledButton onClick={startGame}>New Game</StyledButton>
        ) : (
          <div style={{ width: "100%" }}>
            <Display time={time} point={point} />
            <Board
              collection={card}
              pickCard={active ? matching : () => ""}
              timesUp={timesUp}
              check={check}
              won={won}
            ></Board>
          </div>
        )}
      </StyledWrapper>
    </StyledBackground>
  );
}

export default MixMatch;
