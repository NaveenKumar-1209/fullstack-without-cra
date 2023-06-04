import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ProfileLoginReducer } from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const rootReducer = combineReducers({
//   profile: ProfileLoginReducer,
//   // other reducers...
// });

const persistConfig = {
  key: "frontend",
  storage,
};

const persistedReducer = persistReducer(persistConfig, ProfileLoginReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
