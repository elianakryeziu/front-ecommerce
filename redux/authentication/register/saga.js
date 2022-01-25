import {
    takeEvery, put, call, all, fork,
} from 'redux-saga/effects';
import { actions, types } from './reducer';
import RegisterService from '../../../services/AuthService';

export function* requestRegistration({ data, successCallback, failedCallback }) {
    try {
        const response = yield call(RegisterService.registerUser, data);
        //  dispatch the action of success
        console.log(response.data);
        yield put(actions.registrationSucceeded(response.data));
        successCallback();
    } catch (error) {
        yield put(actions.registrationFailed(error.message));
        failedCallback();
    }
}

//  Watch the generator function of the request registration
function* watchRequestRegistration() {
    yield takeEvery(types.REQUEST_REGISTRATION, requestRegistration);
}

//  fork all watchers
export default function* registerSaga() {
    yield all([
        fork(watchRequestRegistration),
    ]);
}
