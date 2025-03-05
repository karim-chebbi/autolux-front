import { CURRENT_USER, LOGIN_USER_FAIL, LOGIN_USER_LOAD, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAIL, REGISTER_USER_LOAD, REGISTER_USER_SUCCESS } from "../ActionTypes/AuthActionTypes";


const initialstate = {
    load: false,
    success: null,
    errors: null,
    user: {},
    isAuth: false
}


const authReducer = (state=initialstate, {type, payload}) => {
    switch (type) {
        case REGISTER_USER_LOAD:
            return {...state, load: true}

        case REGISTER_USER_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {...state, load: false, success: true, user: payload.newUser, isAuth: true}

        case REGISTER_USER_FAIL:
            return {...state, load: false, success: false, errors: payload}

        case LOGIN_USER_LOAD:
            return {...state, load: true}

        case LOGIN_USER_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {...state, load: false, success: true, user: payload.foundUser, isAuth: true}

        case LOGIN_USER_FAIL:
            return {...state, load: false, success: false, errors: payload}

        case LOGOUT_USER:
            localStorage.removeItem('token')
            return {...state, load: false, success: false, user: {}, isAuth: false}

        case CURRENT_USER:
            return {...state, load: false, success: true, user: payload, isAuth: true}

        default:
            return state
    }
}

export default authReducer;