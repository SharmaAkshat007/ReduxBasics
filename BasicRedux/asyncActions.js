const redux = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

// Actions Types
const GET_USERS = "GET_USERS";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "GET_USERS_FAILURE";

// Actions

const getUsers = () => {
  return {
    type: GET_USERS,
  };
};

const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error,
  };
};

// State

const initialState = {
  loading: false,
  users: [],
  err: "",
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        err: "",
      };
    case GET_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        err: action.payload,
      };
    default:
      return state;
  }
};

const getUserState = () => {
  return function (dispatch) {
    dispatch(getUsers());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const user = res.data.map((user) => user.name);

        dispatch(getUsersSuccess(user));
      })
      .catch((err) => {
        dispatch(getUsersFailure(err.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getUserState());
