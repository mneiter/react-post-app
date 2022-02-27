/* eslint-disable react/react-in-jsx-scope */
import About from '../pages/About';
import Error from '../pages/Error';
import PostDetails from '../pages/PostDetails';
import Posts from '../pages/Posts';

export const routes = [
  { path: '/about', element: <About />, exact: false },
  { path: '/posts', element: <Posts />, exact: true },
  { path: '/posts/:id', element: <PostDetails />, exact: true },
  { path: '/error', element: <Error />, exact: false },
];
