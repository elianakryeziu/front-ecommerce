import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

export default store;