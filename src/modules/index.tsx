import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Route from 'commons/components/Route';
import Auth from './Auth';
import Home from './Home';

const Routes = () => (
  <Suspense fallback="">
    <Switch>
      <Route component={Home} path="/home" isPrivate />
      <Route component={Auth} path="/" />
    </Switch>
  </Suspense>
);

export default Routes;
