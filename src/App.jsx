import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MyNavbar from './components/UI/navbar/MyNavbar';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route
          path="*"
          element={(<main style={{ padding: '1rem' }}><h1>There&apos;s nothing here!</h1></main>)}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
