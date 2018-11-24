import {
    CARS_REQUEST,
    CARS_SUCCESS,
    CARS_FAILURE,
} from './types';
import getResponseFromEndpoint from '../../Utils/getResponseFromEndpoint';

const requestCars = () => ({
    type: CARS_REQUEST,
});

const successCars = cars => {
    return ({
        type: CARS_SUCCESS,
        payload: {
            cars: cars,
        },
    });
};

const failureCars =() => ({
    type: CARS_FAILURE,
});

export const getAllRelative = () => {
    let config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return async dispatch => {
        dispatch(requestCars());

        try {
            const response = await getResponseFromEndpoint('http://localhost:8080/car/getAllRelative', config);
            dispatch(successCars(response));

        } catch(err) {
            console.log(err);
            dispatch(failureCars());
        }
    };
};