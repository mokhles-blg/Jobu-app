import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_USERS_LOAD,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../actionTypes/user";

import axios from "axios";

export const register = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  console.log(history);
  try {
    const result = await axios.post("/api/user/signup", newUser);

    dispatch({ type: REGISTER_USER, payload: result.data }); //msg , token , user
    history.push("/profile");
  } catch (error) {
    console.log(error.response.data.errorrs);
    // error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_USER, payload: error.message });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/signin", user);
    dispatch({ type: LOGIN_USER, payload: result.data }); //msg /token , user
    history.push("/Profile");
  } catch (error) {
    // error.response.data.errors.map((el) =>
    //   setTimeout(function () {
    //     alert(el.msg);
    //   }, 3000)
    // );
    dispatch({ type: FAIL_USER, payload: error.message });
  }
};

export const currentUser = () => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/user/current", options);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    //dispatch({ type: FAIL_USER, payload: error.message });
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const videErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};

/*export const showUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_LOAD });
  try {
    const res = await axios.get("/api/user/users/");
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: res.data.listUsers,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: error,
    });
    console.log(error);
  }
};*/
