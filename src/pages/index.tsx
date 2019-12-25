import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Spin } from 'antd';

const Home = lazy(() => import('@/pages/Home'));
const Info = lazy(() => import('@/pages/Info'));
const Cad = lazy(() => import('@/pages/Cad'));
const PageNotFound = lazy(() => import('@/pages/404'));

export default function RootRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/info" component={Info}></Route>
          <Route path="/cad" component={Cad}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
