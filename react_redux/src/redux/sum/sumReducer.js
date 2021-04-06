import { SUM } from "./sumActionTypes";
const initialState = {
  a: 0,
  b: 0,
};

const sumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUM:
      return {
        a: action.payload.a,
        b: action.payload.b,
      };
    default:
      return state;
  }
};

export default sumReducer;
