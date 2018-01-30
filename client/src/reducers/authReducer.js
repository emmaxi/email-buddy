import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            // if action.payload is an empty string, return false, otherwise, return action.payload
            return action.payload || false;
        default:
            return state;
    }
}

