<<<<<<< HEAD
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MyNav from '../nav/MyNav';
import { routes } from '../../../router';

function MyAppRouter() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        {
          routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          ))
        }
      </Routes>
    </BrowserRouter>
=======
import React, { useContext } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { AuthContext } from '../../../context';
import { privateRoutes, publicRoutes } from '../../../router';

function MyAppRouter() {
  // eslint-disable-next-line no-unused-vars
  const { authUser } = useContext(AuthContext);
  return (
    <Routes>
      {
        console.log(authUser.isAuthorized)
      }
      {
          authUser.isAuthorized
            ? privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
                exact={route.exact}
              />
            ))
            : publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
                exact={route.exact}
              />
            ))
        }
    </Routes>
>>>>>>> develop
  );
}

export default MyAppRouter;
