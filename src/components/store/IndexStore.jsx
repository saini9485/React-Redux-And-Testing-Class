import { createStore } from "redux";

const DEFAULT_STATE = {
  counter: 7,
  name: "Rajesh",
  age: 22,
};

const reducerCounter = (state = DEFAULT_STATE, action) => {
  if (action.type == "increment") {
    return { ...state, counter: state.counter + 5 };
  }
  if (action.type == "decrement") {
    return { ...state, counter: state.counter - 5 };
  }
  return state;
};

const store = createStore(reducerCounter);

export default store;
