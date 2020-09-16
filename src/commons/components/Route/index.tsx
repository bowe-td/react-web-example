import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

interface Props {
  isPrivate?: boolean;
  component: React.ComponentType;
  path: string;
  exact?: boolean;
}

const Route = (props: Props) => {
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

export default Route;
