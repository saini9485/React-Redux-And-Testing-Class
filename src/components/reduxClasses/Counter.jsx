import React from "react";
import { useSelector } from "react-redux";

import "./Counter.css";

export function Counter() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  return (
    <>
      <div className="counter-container">
        <h1>{counter}</h1>
        <button style={{ margin: "20px" }}>Increment</button>
        <button style={{ margin: "20px" }}>Decrement</button>
      </div>
    </>
  );
}
