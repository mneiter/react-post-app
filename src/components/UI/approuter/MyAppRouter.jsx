import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MyNavbar from '../navbar/MyNavbar';
import { routes } from '../../../router';

function MyAppRouter() {
  return (
    <BrowserRouter>
      <MyNavbar />
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
        <Route
          path="*"
          element={(<div style={{ padding: '1rem' }}><h1>There&apos;s nothing here!</h1></div>)}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MyAppRouter;
