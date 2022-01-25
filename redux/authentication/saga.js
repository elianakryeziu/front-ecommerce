import { all, fork } from '@redux-saga/core/effects';
import registerSaga from './register/saga';
import loginSaga from './register/saga';

export default function* authenticationSaga() {
    yield all([
        fork(registerSaga),
        fork(loginSaga),
    ]);
};