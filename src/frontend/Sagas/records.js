import { fetchRecords, addRecord, clearRecords } from '../API/records';
import { put, takeEvery } from 'redux-saga/effects';
import {
    FETCH_RECORDS,
    FETCH_RECORDS_SUCCESS,
    CLEAR_RECORDS,
    CLEAR_RECORDS_SUCCESS,
    ADD_RECORD_SUCCESS,
    ADD_RECORD
} from '../Constants/actionTypes';

function* fetchAllRecords() {
    const responseResult = yield fetchRecords();
    const { status } = responseResult;
    if (status >= 400) {
        alert(`Something went wrong: ${status} ${responseResult.data}`)
    } else {
        yield put({ type: FETCH_RECORDS_SUCCESS, data: responseResult.data })
    }
}

function* ClearAllRecords() {
    const responseResult = yield clearRecords();
    const { status } = responseResult;
    if (status >= 400) {
        alert(`Something went wrong: ${status} ${responseResult.data}`)
    } else {
        yield put({ type: CLEAR_RECORDS_SUCCESS, data: null })
    }
}

function* addOneRecord({ data }) {
    const responseResult = yield addRecord(data);
    const { status } = responseResult;
    if (status >= 400) {
        alert(`Something went wrong: ${status} ${responseResult.data}`)
    } else {
        if (status == 201) yield put({ type: ADD_RECORD_SUCCESS, data: data })
        else if (status === 200) alert(responseResult.data.status)
    }
}

export default function* () {
    yield takeEvery(FETCH_RECORDS, fetchAllRecords),
    yield takeEvery(CLEAR_RECORDS, ClearAllRecords),
    yield takeEvery(ADD_RECORD, addOneRecord)
}