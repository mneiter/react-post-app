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
  );
}

export default MyAppRouter;
