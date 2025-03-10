import { GET_USERS_LOAD, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../ActionTypes/UserActionTypes";

const initialstate = {
  load: false,
  success: null,
  errors: null,
  users: [],
};


const userReducer = (state = initialstate, {type, payload}) => {
    switch (type) {
        case GET_USERS_LOAD:
            return {...state, load: true}
            
        case GET_USERS_SUCCESS:
            return {...state, load: false, success: true, users: payload}

        case GET_USERS_FAIL:
            return {...state, load: false, success: false, errors: payload}
            
    
        default:
            return state
    }
}

export default userReducer