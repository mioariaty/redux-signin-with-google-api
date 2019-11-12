import * as types from "../constants/actionsType";
import _ from 'lodash';

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
            return {...state, [action.payload.id]: action.payload}; 
            
        // delete propterties
        case types.DELETE_STREAM:
            const deleteState = {...state};
            deleteState[action.payload.id] = action.payload;
            return delete deleteState.id;

            /* cach 2
                return _.omit(state, action.payload.id);
            */
        default:
            return state;
    }
}

