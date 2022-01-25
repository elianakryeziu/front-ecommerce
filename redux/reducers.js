import { combineReducers } from "redux";
import authentication from './authentication/reducer';
// import productReducer from './Product/reducer';

const appReducer = combineReducers({
    authentication,
    // productReducer,
});

export default appReducer;