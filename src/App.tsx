import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import LocaleWrapper from '@/components/LocaleWrapper';
import configureStore from '@/store';
import RootRoute from '@/pages';

function App() {
  return (
    <Provider store={configureStore()}>
      <LocaleWrapper>
        <RootRoute />
      </LocaleWrapper>
    </Provider>
  );
}
export default hot(module)(App);
