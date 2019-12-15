import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Spin } from 'antd';

function loadableComponent(dynamicImport: any) {
  const LazyComponent = lazy(dynamicImport);
  return (
    <Suspense fallback={<Spin />}>
      <LazyComponent />
    </Suspense>
  );
}

export default function RootRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {loadableComponent(() => import('./App/App'))}
        </Route>
        <Route path="/info">{loadableComponent(() => import('./Info'))}</Route>
        <Route path="/cad">{loadableComponent(() => import('./Cad'))}</Route>
        <Route>{loadableComponent(() => import('./404'))}</Route>
      </Switch>
    </BrowserRouter>
  );
}
