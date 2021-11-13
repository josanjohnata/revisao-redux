import { createStore, combineReducers } from "redux";
import CalculatorReducer from "../Reducer/Calculator.reducer";

const rootReducer = combineReducers({
  calculator: CalculatorReducer,
});

const store = createStore(rootReducer)

export default store;