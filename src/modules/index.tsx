import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'commons/components/Route';
import Auth from './Auth';
import Home from './Auth';

const Routes = () => (
  <Switch>
    <Route component={Auth} path="/" exact />
    <Route component={Home} path="/home" isPrivate />
  </Switch>
);

export default Routes;
