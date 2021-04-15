import { SET_JOBS_FILTER } from "../actionTypes/job";

const initialState = {
  search: {},
  listJobs: [],
};

const jobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_JOBS_FILTER:
      return { ...state, search: payload };
    case "SET_JOB_RESULTS":
      return { ...state, listJobs: payload };
    default:
      return state;
  }
};

export default jobReducer;
