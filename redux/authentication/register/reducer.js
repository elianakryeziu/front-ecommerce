import { createActions } from 'reduxsauce';

const { Types: types, Creators: actions } = createActions({
    requestRegistration: ['data', 'successCallback', 'failedCallback'],
    registrationSucceeded: ['data'],
    registrationFailed: ['error'],
});

const registrationHandlers = {
    [types.REQUEST_REGISTRATION]: (state) => ({
        ...state,
        submiting: true,
        error: null,
    }),
    [types.REGISTRATION_SUCCEEDED]: (state, action) => ({
        ...state,
        data: action.data,
        submiting: false,
        error: null,
    }),
    [types.REGISTRATION_FAILED]: (state, action) => ({
        ...state,
        submiting: false,
        error: action.message,
    }),
};

export default registrationHandlers;
export { types, actions };
