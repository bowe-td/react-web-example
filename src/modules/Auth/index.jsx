import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'commons/components';

const ForgotPasswordRoute = lazy(() => import('./ForgotPassword'));
const LoginRoute = lazy(() => import('./Login'));
const SignupRoute = lazy(() => import('./SignUp'));

const Auth = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Router basename="/auth">
        <Route component={ForgotPasswordRoute} path="/forgot-password" />
        <Route component={LoginRoute} path="/login" exact />
        <Route component={SignupRoute} path="/sign-up" exact />
      </Router>
    </Suspense>
  );
};

export default Auth;
