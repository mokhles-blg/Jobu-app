import { GET_APPLICATION } from "../actionTypes/application";

import axios from "axios";

export const getApplication = (userID) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/application/${userID}`);
    dispatch({ type: GET_APPLICATION, payload: res.data.applicationToFind });
  } catch (error) {
    console.log(error);
  }
};
