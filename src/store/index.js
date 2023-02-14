import { authReducer } from "./auth/authReducer";
import { calculateReducer } from "./calculator/Calculator";

const { createStore, combineReducers } = require("redux");

const rootReducer = combineReducers({
  calculator: calculateReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("RENDER", store.getState());
});
