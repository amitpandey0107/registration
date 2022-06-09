import {
    GET_COUNTRIES_LOADING,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_ERROR,

    GET_STATES_SUCCESS,
    GET_STATES_ERROR,
    GET_STATES_LOADING,

    GET_CITIES_SUCCESS,
    GET_CITIES_ERROR,
    GET_CITIES_LOADING,

    SAVE_DATA_SUCCESS,
    SAVE_DATA_ERROR,
    SAVE_DATA_LOADING

} from './types'
import axios from 'axios'

const countriesUrl = 'https://concord-test.herokuapp.com/api/countries';
const statesUrl = 'https://concord-test.herokuapp.com/api/states';
const citiesUrl = 'https://concord-test.herokuapp.com/api/cities';
const registerUrl = 'https://concord-test.herokuapp.com/api/register';

export const getCountries = () => {
    return (dispatch) => {
        return axios.get(
            countriesUrl,
            {
                headers: {
                    'Access-Control-Allow-Origin': true,
                }
            })
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: GET_COUNTRIES_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: GET_COUNTRIES_ERROR,
                    payload: error
                }));
    };
};


export const getStates = (value) => {
    return (dispatch) => {
        return axios.post(
            statesUrl,
            {
                country_code:value,
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': true,
                }
            })
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: GET_STATES_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: GET_STATES_ERROR,
                    payload: error
                }));
    };
};



export const getCities = (country_code, state_code) => {
    return (dispatch) => {
        return axios.post(
            citiesUrl,
            {
                country_code:country_code,
                state_code:state_code
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': true,
                }
            })
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: GET_CITIES_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: GET_CITIES_ERROR,
                    payload: error
                }));
    };
};


export const registerData = (regsiter_data) => {
    return (dispatch) => {
        return axios.post(
            registerUrl,
            {
                first_name: regsiter_data.first_name,
                last_name:regsiter_data.last_name, 
                email:regsiter_data.email, 
                address1:regsiter_data.address1, 
                address2:regsiter_data.address2,
                country:regsiter_data.country, 
                state:regsiter_data.state, 
                city:regsiter_data.city 
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': true,
                }
            })
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: SAVE_DATA_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: SAVE_DATA_ERROR,
                    payload: error
                }));
    };
};
