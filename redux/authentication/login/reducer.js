import { createActions } from 'reduxsauce';

const { Types: types, Creators: actions } = createActions({
    requestLogin: ['data', 'successCallback', 'errorCallback'],
    loginFailed: ['error'],
    loginSucceeded: ['data'],
    requestLogout: null,
    logoutFailed: ['error'],
    logoutSucceeded: null,
    loggedOut: null,
});

const loginHandlers = {
    [types.REQUEST_LOGIN]: (state) => ({
        ...state,
        loggingIn: true,
        error: null,
    }),
    [types.LOGIN_SUCCEEDED]: (state, action) => ({
        ...state,
        loggingIn: false,
        user: action.data,
        authenticated: true,
    }),
    [types.LOGIN_FAILED]: (state, action) => ({
        ...state,
        loggingIn: false,
        error: action.error,
    }),
    [types.REQUEST_LOGOUT]: (state) => ({
        ...state,
        authenticated: false,
        loggingOut: true,
        error: null,
    }),
    [types.LOGOUT_SUCCEEDED]: (state) => ({
        ...state,
        loggedOut: true,
        loggingOut: false,
        user: null,
    }),
    [types.LOGOUT_FAILED]: (state, action) => ({
        ...state,
        loggingOut: false,
        error: action.error,
    }),

};
export default loginHandlers;
export { types, actions };
