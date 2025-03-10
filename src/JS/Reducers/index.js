import authReducer from "./AuthReducer";
import carReducer from "./CarReducer";
import { combineReducers } from "redux";
import userReducer from "./UserReducer";


const rootReducer = combineReducers({ carReducer, authReducer, userReducer });

export default rootReducer;