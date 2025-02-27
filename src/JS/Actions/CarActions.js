import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, DELETE_CAR_FAIL, DELETE_CAR_LOAD, DELETE_CAR_SUCCESS, EDIT_CAR_FAIL, EDIT_CAR_LOAD, EDIT_CAR_SUCCESS, GET_CARBYID_FAIL, GET_CARBYID_LOAD, GET_CARBYID_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS } from "../ActionTypes/CarActionTypes"
import axios from 'axios'

export const get_cars = () => async (dispatch) => {
        dispatch({type: GET_CARS_LOAD})
    try {
        const result = await axios.get(
          "/api/cars/get_cars"
        );
        dispatch({type: GET_CARS_SUCCESS, payload: result.data.foundCars})
    } catch (error) {
        dispatch({ type: GET_CARS_FAIL, payload: error.response.data.error });
    }
}

export const get_car_byid = (id) => async (dispatch) => {
    dispatch({type: GET_CARBYID_LOAD})
    try {
        const result = await axios.get( 
          `/api/cars/get_car_byid/${id}`
        );
        dispatch({ type: GET_CARBYID_SUCCESS, payload: result.data.foundCar});
    } catch (error) {
        dispatch({
          type: GET_CARBYID_FAIL,
          payload: error.response.data.error,
        });
    }
}

export const add_car = (newCar) => async (dispatch) => {
  dispatch({type: ADD_CAR_LOAD})
  try {
    const result = await axios.post(
      "/api/cars/add_car",
      newCar
    );
    dispatch({type: ADD_CAR_SUCCESS, payload: result.data})
  } catch (error) {
    dispatch({type: ADD_CAR_FAIL, payload: error.message})
  }
}

export const delete_car = (id, navigate) => async (dispatch) => {
  dispatch({type: DELETE_CAR_LOAD})
  try {
    const result = await axios.delete(`/api/cars/delete_car/${id}`);
    dispatch({ type: DELETE_CAR_SUCCESS, payload: result.data });
    navigate('/showroom')
  } catch (error) {
        dispatch({ type: DELETE_CAR_FAIL, payload: error.message });
  }
}

export const edit_car = (id, newCar) => async (dispatch) => {
  dispatch({ type: EDIT_CAR_LOAD });
  try {
    const result = await axios.put(`/api/cars/update_car/${id}`, newCar);
    dispatch({ type: EDIT_CAR_SUCCESS, payload: result.data });
    dispatch(get_car_byid(id));
  } catch (error) {
    dispatch({ type: EDIT_CAR_FAIL, payload: error.message });
  }
};