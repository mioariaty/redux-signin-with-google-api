import streamsAPI from '../utils/streams.api';
import * as types from "../constants/actionsType";
import history from '../history';

// case 1
export const signIn = (userId) => {
    return {
        type: types.SIGN_IN,
        payload: userId
    }
}

// case 2
export const signOut = () => {
    return {
        type: types.SIGN_OUT
    }
}

// case 3 : create a record
export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    // combine userId with streams
    const response =  await streamsAPI.post('/streams', {...formValues, userId});

    dispatch({
        type: types.CREATE_STREAM,
        payload: response.data
    })
    // after submit go back to the list streams
    history.push('/');
}

// case 4 : fetch all records
export const fetchStreams = () => async dispatch => {
    const response = await streamsAPI.get('/streams');

    dispatch({
        type: types.FETCH_STREAMS,
        payload: response.data
    })
};

// case 5 : fetch a record
export const fetchSingleStream = (id) => async dispatch => {
    const response = await streamsAPI.get(`/streams/${id}`);

    dispatch({
        type: types.FETCH_STREAM,
        payload: response.data
    })
};

// case 6 : edit a stream | *id,formValues: lấy id và body info của stream muốn edit
export const editStream  = (id, formValues) => async dispatch => {
    const response = await streamsAPI.patch(`/streams/${id}`, formValues);

    dispatch({
        type: types.EDIT_STREAM,
        payload: response.data
    })
    history.push('/');
}

// case 7 : delete a stream
export const deleteStream = (id) => async dispatch => {
    await streamsAPI.delete(`/streams/${id}`);

    dispatch({
        type: types.DELETE_STREAM,
        payload: id // lấy id của stream ta muốn xóa
    })
    history.push('/');
}