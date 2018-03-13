import { all } from 'redux-saga/effects';
import records from './records';

export default function* rootSaga() {
    yield all([
        records(),
    ]);
}