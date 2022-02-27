import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MyNavbar from '../navbar/MyNavbar';
import About from '../../../pages/About';
import Posts from '../../../pages/Posts';
import Error from '../../../pages/Error';

function MyAppRouter() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/error" element={<Error />} />
        <Route
          path="*"
          element={(<div style={{ padding: '1rem' }}><h1>There&apos;s nothing here!</h1></div>)}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MyAppRouter;
