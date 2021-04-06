import { INCREASE_COUNTER, DECREASE_COUNTER } from "./counterActionName";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
