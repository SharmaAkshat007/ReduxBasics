import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "./userActionTypes";

export const getUser = () => {
  return {
    type: GET_USERS,
  };
};

export const getUserSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUserFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error,
  };
};
