import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import rootReduce from './root-reducer';
import rootSaga from './root-saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    const logger = createLogger({ collapsed: true });
    middleWares.push(logger);
  }
  const middleWareEnhancer = applyMiddleware(...middleWares);
  const store = createStore(rootReduce, composeWithDevTools(middleWareEnhancer));
  sagaMiddleware.run(rootSaga);
  return store;
}
