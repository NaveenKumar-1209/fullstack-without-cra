import { LOGIN, REGISTRATION, REGISTRATION_ERROR } from "./types";

let initialState = {
  profile: {},
  token: "",
  isLogin: false,
  error: "",
  loading: true,
};
export const ProfileLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        profile: action.payload,
        isLogin: true,
        token: action.payload.token,
        error: "",
        loading: false,
      };
    case REGISTRATION_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};
