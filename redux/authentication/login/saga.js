import {
    takeLatest, put, call, all, fork,
} from 'redux-saga/effects';
import LoginUserService from '~services/AuthServices';
import {
    setSessionStorageToken, removeToken, setStorageToken,
} from '~helpers/auth';
import { actions, types } from './reducer';

//  Generator
export function* requestLogin({ data, successCallback, errorCallback }) {
    try {
        const response = yield call(LoginUserService.login, data);
        data.rememberMe ? setStorageToken(response.data.token)
            : setSessionStorageToken(response.data.token);
        console.log(response);
        yield put(actions.loginSucceeded(response.data));
        successCallback();
    } catch (error) {
        removeToken();
        yield put(actions.loginFailed(error.message));
        errorCallback('Check your credentials!');
    }
}

export function* requestLogout() {
    try {
        yield call(LoginUserService.logout);
        yield put(actions.logoutSucceeded());
    } catch (error) {
        yield put(actions.logoutFailed(error.message));
    }
}

//  watchers
function* watchRequestLogin() {
    yield takeLatest(types.REQUEST_LOGIN, requestLogin);
}

function* watchRequestLogout() {
    yield takeLatest(types.REQUEST_LOGOUT, requestLogout);
}

//  fork all watchers
export default function* loginSaga() {
    yield all([
        fork(watchRequestLogin),
        fork(watchRequestLogout),
    ]);
}
