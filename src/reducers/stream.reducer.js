import * as types from "../constants/actionsType";
import _ from 'lodash';

// fetch a record
export default (state = {}, action) => {
    switch (action.type) {
        // fetch all records
        case types.FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}

        // (fetch, create, update) response a single record
        case types.FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case types.CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload}; 
        case types.EDIT_STREAM:
            const newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
            
        // delete propterties
        case types.DELETE_STREAM:
            return _.omit(state, action.payload.id);

        default:
            return state;
    }
}

