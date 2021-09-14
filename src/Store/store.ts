import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { rootReducer } from './Reducers/rootReducer';
import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);
