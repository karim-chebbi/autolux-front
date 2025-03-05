import axios from "axios"
import { CURRENT_USER, LOGIN_USER_FAIL, LOGIN_USER_LOAD, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAIL, REGISTER_USER_LOAD, REGISTER_USER_SUCCESS } from "../ActionTypes/AuthActionTypes"


export const registerUser = (newUser, navigate) => async (dispatch) => {
    dispatch({type: REGISTER_USER_LOAD})
    try {
        const result = await axios.post('/api/auth/register', newUser)
        dispatch({type: REGISTER_USER_SUCCESS, payload: result.data})
        navigate('/showroom')
    } catch (error) {
        dispatch({type: REGISTER_USER_FAIL,payload: error.message})
    }
}

export const loginUser = (user, naviagate) => async (dispatch) => {
    dispatch({type: LOGIN_USER_LOAD})
    try {
        const result = await axios.post('/api/auth/login', user)
        dispatch({type: LOGIN_USER_SUCCESS, payload: result.data})
        naviagate('/showroom')
    } catch (error) {
        dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data.errors[0].msg });
    }
}

export const logoutUser = (navigate) => async (dispatch) => {
    dispatch({type: LOGOUT_USER})
    navigate('/login')
}

export const currentUser = () => async (dispatch) => {
    dispatch({type: LOGIN_USER_LOAD})
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        const result = await axios.get('/api/auth/current', config)
        dispatch({type: CURRENT_USER, payload: result.data})
    } catch (error) {
                dispatch({
                  type: LOGIN_USER_FAIL,
                  payload: error.response.data.errors,
                });

    }
}