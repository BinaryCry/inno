import { FETCH_RECORDS, CLEAR_RECORDS, ADD_RECORD } from '../Constants/actionTypes';

export const fetchRecordsAction = () => ({
    type: FETCH_RECORDS,
    data: null
});

export const clearRecordsAction = () => ({
    type: CLEAR_RECORDS,
    data: null
});

export const addOneRecordAction = (record) => ({
    type: ADD_RECORD,
    data: record
});