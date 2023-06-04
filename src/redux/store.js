import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import ProfileLoginReducer from "./reducer";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
  profile: ProfileLoginReducer,
  // other reducers...
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
