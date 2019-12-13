import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import rootReduce from './root-reducer';
import rootSaga from './root-saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWareEnhancer = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReduce, composeWithDevTools(middleWareEnhancer));
  sagaMiddleware.run(rootSaga);
  return store;
}
