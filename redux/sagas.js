import { all } from 'redux-saga/effects';
import authenticationSaga from './authentication/saga';
// import productSaga from './product/saga';

export default function* rootSaga() {
    yield all([
        authenticationSaga(),
        // productSaga(),
    ]);
}
