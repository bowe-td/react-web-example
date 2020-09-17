import React, { lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'commons/components';

const ForgotPasswordRoute = lazy(() => import('./ForgotPassword'));
const LoginRoute = lazy(() => import('./Login'));
const SignupRoute = lazy(() => import('./SignUp'));

const Auth = () => {
  return (
    <Router basename="/auth">
      <Route component={ForgotPasswordRoute} path="/forgot-password" exact />
      <Route component={LoginRoute} path="/login" exact />
      <Route component={SignupRoute} path="/sign-up" exact />
    </Router>
  );
};

export default Auth;
