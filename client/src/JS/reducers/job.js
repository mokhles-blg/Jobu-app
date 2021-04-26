import {
  SET_JOBS_FILTER,
  LOAD_JOB,
  ADD_JOB,
  FAIL_JOB,
} from "../actionTypes/job";

const initialState = {
  job: null,
  loadJob: false,
  errors: [],
  search: {},
  listJobs: [],
};

const jobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_JOBS_FILTER:
      return { ...state, search: payload };
    case "SET_JOB_RESULTS":
      return { ...state, listJobs: payload };
    case LOAD_JOB:
      return { ...state, loadJob: true };
    case ADD_JOB:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadJob: false,
        job: payload.job,
        errors: [],
      };
    case FAIL_JOB:
      return { ...state, loadJob: false, errors: [...state.errors, payload] };
    default:
      return state;
  }
};

export default jobReducer;
