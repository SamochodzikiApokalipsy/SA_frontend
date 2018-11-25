import {CHANGE_SCREEN_TO_RACE} from './types';

const initalState = {
    race: false,
};

export default (state = initalState, action) => {
    switch (action.type) {
        case CHANGE_SCREEN_TO_RACE:
            return {
                ...state,
                race: true,
            };
        default:
            return state;
    }
}