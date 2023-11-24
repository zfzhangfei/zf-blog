import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, render: RenderedComponent, ...rest }) => (
  <Route {...rest} render={(props) => {
    const isAuthenticated = sessionStorage.getItem('token');
    

    if (isAuthenticated) {
      // 如果提供了"render"属性
      if (RenderedComponent) {
        return RenderedComponent(props);
      }
      // 如果提供了"component"属性
      if (Component) {
        return <Component {...props} />;
      }
    } else {
      return <Redirect to={{
          pathname: '/Login',
          state: { from: props.location }
        }} />;
    }

    // 如果既没有提供"component"也没有提供"render"属性
    return null;
  }} />
);

export default AuthRoute;