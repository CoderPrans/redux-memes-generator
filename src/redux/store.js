import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware)
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
