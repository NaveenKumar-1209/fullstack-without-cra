import { LOGIN, REGISTRATION, REGISTRATION_ERROR } from "./types";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

let initialState = {
  profile: null,
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

const persistConfig = {
  keyPrefix: "lifely-",
  key: "profile",
  storage,
};

export default persistReducer(persistConfig, ProfileLoginReducer);
