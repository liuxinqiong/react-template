import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable global-require */
    const { createLogger } = require('redux-logger');
    const logger = createLogger({ collapsed: true });
    middleWares.push(logger);
  }
  const middleWareEnhancer = applyMiddleware(...middleWares);
  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
  sagaMiddleware.run(rootSaga);
  return store;
}
