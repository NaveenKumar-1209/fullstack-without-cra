import { LOGIN, REGISTRATION, REGISTRATION_ERROR } from "./types";

let initialState = {
  profile: {},
  isLogin: false,
  error: "",
};
export const ProfileLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION:
      return { ...state, profile: action.payload, isLogin: true };
      break;
    case REGISTRATION_ERROR:
      return { ...state, error: action.payload };
    default:
      break;
  }
};
