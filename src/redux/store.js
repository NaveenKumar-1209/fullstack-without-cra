import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ProfileLoginReducer } from "./reducer";

export const store = createStore(ProfileLoginReducer, applyMiddleware(thunk));
