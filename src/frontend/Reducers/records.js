import { createReducer } from 'redux-create-reducer';
import {
    ADD_RECORD_SUCCESS,
    CLEAR_RECORDS_SUCCESS,
    FETCH_RECORDS_SUCCESS
} from '../Constants/actionTypes';

const initialState = [];

const records = createReducer(initialState, {
    [FETCH_RECORDS_SUCCESS]: (state, action) => action.data.map(dbItem => dbItem.data),
    [CLEAR_RECORDS_SUCCESS]: (state, action) => [],
    [ADD_RECORD_SUCCESS]: (state, action) => [...state, action.data]
});

export default records;