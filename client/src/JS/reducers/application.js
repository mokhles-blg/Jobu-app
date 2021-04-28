import { GET_APPLICATION } from "../actionTypes/application";

const initialState = {
  applications: [],
  loadApplications: false,
  errors: [],
  application: {},
};

const applicationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_APPLICATION:
      return {
        ...state,
        application: payload,
      };

    default:
      return state;
  }
};

export default applicationReducer;
