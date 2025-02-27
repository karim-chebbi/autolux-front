import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, DELETE_CAR_FAIL, DELETE_CAR_LOAD, DELETE_CAR_SUCCESS, EDIT_CAR_FAIL, EDIT_CAR_LOAD, EDIT_CAR_SUCCESS, GET_CARBYID_FAIL, GET_CARBYID_LOAD, GET_CARBYID_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS } from "../ActionTypes/CarActionTypes";


const initialstate = {
    load: false,
    success: null,
    errors: null,
    cars: [],
    car: {}
}

const carReducer = (state=initialstate, {type, payload}) => {
    switch (type) {
        
        case GET_CARS_LOAD:
            return {...state, load: true}

        case GET_CARS_SUCCESS:
            return {...state, load: false, success: true, cars: payload}

        case GET_CARS_FAIL:
            return {...state, load: false, success: false, errors: payload}

        case GET_CARBYID_LOAD:
            return {...state, load: true}

        case GET_CARBYID_SUCCESS:
            return {...state, load: false, success: true, car: payload}

        case GET_CARBYID_FAIL:
            return {...state, load: false, success: null, errors: payload}

        case ADD_CAR_LOAD:
            return {...state, load: true}

        case ADD_CAR_SUCCESS:
            return {...state, load: false, success: true}

        case ADD_CAR_FAIL:
            return {...state, load: false, success: false, errors: payload}

        case DELETE_CAR_LOAD:
            return {...state, load: true}

        case DELETE_CAR_SUCCESS:
            return {...state, load: false, success: true}

        case DELETE_CAR_FAIL:
            return {...state, load: false, success: false, errors: payload}

        case EDIT_CAR_LOAD:
            return {...state, load: true}

        case EDIT_CAR_SUCCESS:
            return {...state, load: false, success: true}

        case EDIT_CAR_FAIL:
            return {...state, load: false, success: false, errors: payload}
    
        default:
            return state
    }
}

export default carReducer;