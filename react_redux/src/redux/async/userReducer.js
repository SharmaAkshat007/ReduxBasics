import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "./userActionTypes";

import { getUser, getUserSuccess, getUserFailure } from "./userAction";

import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
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
        error: "",
      };
    case GET_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUsersCall = () => {
  return function (dispatch) {
    dispatch(getUser());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const userName = res.data;

        dispatch(getUserSuccess(userName));
      })
      .catch((error) => {
        dispatch(getUserFailure(error.message));
      });
  };
};
