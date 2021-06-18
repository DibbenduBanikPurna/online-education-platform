import React, { useContext, useState } from 'react';
import { Redirect,Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    return (
        <Route
          {...rest}
          render={({ location }) =>
          (loggedInUser.email || sessionStorage.getItem('token')) ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/log-in",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;