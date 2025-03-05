import authReducer from "./AuthReducer";
import carReducer from "./CarReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({ carReducer, authReducer });

export default rootReducer;