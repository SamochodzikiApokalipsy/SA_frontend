import {
    CARS_REQUEST,
    CARS_SUCCESS,
    CARS_FAILURE,
} from './types';

const initialState = {
    pending: false,
    error: false,
    cars: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CARS_REQUEST:
            return {
                ...state,
                pending: true,
                error: false,
            };
        case CARS_SUCCESS:
            return {
                ...state,
                pending: false,
                cars: action.payload.cars,
            };
        case CARS_FAILURE:
            return {
                ...state,
                pending: false,
                error: true,
            };
        default:
            return state;
    }
}