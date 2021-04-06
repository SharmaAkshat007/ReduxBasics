const redux = require("redux");
const { logger } = require("redux-logger");

const reduxStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const GET_ICECREAM = "GET_ICECREAM";
const GET_CAKE = "GET_CAKE";

// Action Creater

const getIcecream = () => {
  return {
    type: GET_ICECREAM,
  };
};

const getCake = () => {
  return {
    type: GET_CAKE,
  };
};

// States

const cakeState = {
  numberOfCakes: 20,
};

const icecreamState = {
  numberOfIcecream: 30,
};

// Reducers

const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case GET_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = icecreamState, action) => {
  switch (action.type) {
    case GET_ICECREAM:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1,
      };
    default:
      return state;
  }
};

// Combining Reducers

const rootReducer = combineReducer({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// Creating Store

const store = reduxStore(rootReducer, applyMiddleware(logger));

console.log("Initial State : ", store.getState());

// Subscribing to the store for any change

const unsubscribe = store.subscribe(() => {});

// Dispatching actions

store.dispatch(getIcecream());
store.dispatch(getIcecream());
store.dispatch(getIcecream());

store.dispatch(getCake());
store.dispatch(getCake());
store.dispatch(getCake());

// Unsubscribing

unsubscribe();
