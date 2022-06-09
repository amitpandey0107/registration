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
} from '../actions/types';

const initialState = {
    countries: [],
    states:[],
    cities:[],
    regsiterResult:{}
}

const registration = (state = initialState, action) => {

    switch (action.type) {

        case GET_COUNTRIES_LOADING:
            return {
                ...state,
                countries: action.payload.data,
            }
        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload,
            }
        case GET_COUNTRIES_ERROR:
            return {
                ...state,
                countries: action.payload,
            }
        case GET_STATES_LOADING:
            return {
                ...state,
                states: action.payload.data,
            }
        case GET_STATES_SUCCESS:
            return {
                ...state,
                states: action.payload,
            }
        case GET_STATES_ERROR:
            return {
                ...state,
                states: action.payload,
            }        
        case GET_CITIES_LOADING:
            return {
                ...state,
                cities: action.payload.data,
            }
        case GET_CITIES_SUCCESS:
            return {
                ...state,
                cities: action.payload,
            }
        case GET_CITIES_ERROR:
            return {
                ...state,
                cities: action.payload,
            }
        case SAVE_DATA_LOADING:
            return {
                ...state,
                regsiterResult: action.payload.data,
            }
        case SAVE_DATA_SUCCESS:
            return {
                ...state,
                regsiterResult: action.payload,
            }
        case SAVE_DATA_ERROR:
            return {
                ...state,
                regsiterResult: action.payload,
            }
        default:
            return state
    }

}

export default registration;