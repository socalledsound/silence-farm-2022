import { call, all } from 'redux-saga/effects';
import { userSagas } from './userSagas';

export default function* rootSaga(){
    yield all([
        call(userSagas),
    ])
}