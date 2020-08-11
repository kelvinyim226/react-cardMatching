import React from "react";

const Display = ({ time, point }) => (
  <div className="displayWrapper" style={Styles.displayWrapper}>
    <div className="timer">Time : {time}</div>
    <div className="point">point: {point}</div>
  </div>
);
const Styles = {
  displayWrapper: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    margin: "auto",
  },
};

export default Display;
