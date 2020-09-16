/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';

const Route = props => {
  const { isPrivate = false, component: Component, ...rest } = props;
  const { token } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

Route.defaultProps = {
  isPrivate: false,
  token: null,
};

Route.propTypes = {
  component: PropTypes.elementType.isRequired,
  isPrivate: PropTypes.bool,
  token: PropTypes.string,
};

export default Route;
