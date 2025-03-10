import axios from "axios";
import { GET_USERS_FAIL, GET_USERS_LOAD, GET_USERS_SUCCESS } from "../ActionTypes/UserActionTypes"

export const getUsers = () => async (dispatch) => {
    dispatch({type: GET_USERS_LOAD})
        try {
          const result = await axios.get("/api/users/getUsers");
          dispatch({ type: GET_USERS_SUCCESS, payload: result.data.foundUsers });
        } catch (error) {
          dispatch({ type: GET_USERS_FAIL, payload: error });
        }
}