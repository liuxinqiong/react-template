import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PageLoading from '@/components/PageLoading';

const Home = lazy(() => import('@/pages/Home'));
const Page1 = lazy(() => import('@/pages/Page1'));
const Page2 = lazy(() => import('@/pages/Page2'));
const PageNotFound = lazy(() => import('@/pages/404'));

export default function RootRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
