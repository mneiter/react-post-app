import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MyNav from '../nav/MyNav';
import { privateRoutes, publicRoutes } from '../../../router';

function MyAppRouter() {
  const isUserAuthorized = true;
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        {
          isUserAuthorized
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
    </BrowserRouter>
  );
}

export default MyAppRouter;
