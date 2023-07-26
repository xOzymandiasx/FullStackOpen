import { createStore } from "redux";

const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

export const unicafeReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "GOOD":
      return state.good + 1;
    case "OK":
      return state.ok + 1;
    case "BAD":
      return state.bad + 1;
    default:
     return state;
  }
};