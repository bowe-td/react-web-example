import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '../components/Route';
import { Login, Home } from '../pages';

const Routes = () => (
  <Switch>
    <Route component={Login} path="/" exact />
    <Route component={Home} path="/home" isPrivate />
  </Switch>
);

export default Routes;
