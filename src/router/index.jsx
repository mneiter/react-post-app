/* eslint-disable react/react-in-jsx-scope */
import About from '../pages/About';
import Error from '../pages/Error';
import Login from '../pages/Login';
import PostDetails from '../pages/PostDetails';
import Posts from '../pages/Posts';

export const privateRoutes = [
  { path: '/', element: <Posts />, exact: true },
  { path: '/posts', element: <Posts />, exact: true },
  { path: '/posts/:id', element: <PostDetails />, exact: true },
  { path: '/about', element: <About />, exact: false },
  { path: '/error', element: <Error />, exact: false },
  { path: '*', element: <div style={{ padding: '1rem' }}><h1>There&apos;s nothing here!</h1></div>, exact: false },
];

export const publicRoutes = [
  { path: '/', element: <Login />, exact: false },
  { path: '/login', element: <Login />, exact: false },
  { path: '*', element: <div style={{ padding: '1rem' }}><h1>There&apos;s nothing here!</h1></div>, exact: false },
];
