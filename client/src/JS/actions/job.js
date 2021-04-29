import {
  SET_JOBS_FILTER,
  LOAD_JOB,
  ADD_JOB,
  FAIL_JOB,
} from "../actionTypes/job";

import axios from "axios";

export const searchJobs = (filter) => {
  return {
    type: SET_JOBS_FILTER,
    payload: filter,
  };
};

export const deleteFromFilter = (key) => {
  return {
    type: "DELETE_JOBS_FILTER",
    payload: key,
  };
};

export const jobResults = (listJobs) => {
  return {
    type: "SET_JOB_RESULTS",
    payload: listJobs,
  };
};

export const addJob = (newJob, history) => async (dispatch) => {
  dispatch({ type: LOAD_JOB });
  try {
    const result = await axios.post("/api/job/addJob", newJob);

    dispatch({ type: ADD_JOB, payload: result.data }); //msg , token , user
    history.push("/profile");
  } catch (error) {
    console.log(error.response.data.errorrs);
    // error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_JOB, payload: error.message });
  }
};
