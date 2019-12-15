import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import LocaleWrapper from '@/components/LocaleWrapper';
import configureStore from '@/store';
import * as serviceWorker from './serviceWorker';
import RootRoute from './pages';
import '@/styles/global.less';
import '@/styles/index.less';

function Root() {
  return (
    <Provider store={configureStore()}>
      <LocaleWrapper>
        <RootRoute />
      </LocaleWrapper>
    </Provider>
  );
}
const HotRoot = hot(module)(Root);

ReactDOM.render(<HotRoot />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
