import { SET_JOBS_FILTER } from "../actionTypes/job";

export const searchJobs = (filter) => {
  return {
    type: SET_JOBS_FILTER,
    payload: filter,
  };
};

export const jobResults = (listJobs) => {
  return {
    type: "SET_JOB_RESULTS",
    payload: listJobs,
  };
};
