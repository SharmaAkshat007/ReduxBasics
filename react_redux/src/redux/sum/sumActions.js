import { SUM } from "./sumActionTypes";

export const getSum = (val = { a: 0, b: 0 }) => {
  return {
    type: SUM,
    payload: val,
  };
};
