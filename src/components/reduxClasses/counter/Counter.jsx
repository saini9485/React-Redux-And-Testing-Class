import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Counter.css"

export function Counter() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => {
    return state.counter;
  });

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <>
      <div className="counter-container">
        <h1>{counter}</h1>
        <button style={{ margin: "10px" }} onClick={handleIncrement}>
          Increment
        </button>
        <button style={{ margin: "10px" }} onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </>
  );
}
