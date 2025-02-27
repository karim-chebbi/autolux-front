import carReducer from "./CarReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({ carReducer });

export default rootReducer;