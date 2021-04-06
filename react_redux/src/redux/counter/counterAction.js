import { INCREASE_COUNTER, DECREASE_COUNTER } from "./counterActionName";

export const increaseCounter = (val) => {
  return {
    type: INCREASE_COUNTER,
    payload: val,
  };
};

export const decreaseCounter = (val) => {
  return {
    type: DECREASE_COUNTER,
    payload: val,
  };
};
