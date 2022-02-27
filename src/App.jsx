import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MyAppRouter from './components/UI/approuter/MyAppRouter';
import MyNav from './components/UI/nav/MyNav';
import { AuthContext } from './context';

function App() {
  const [authUser, setAuthUser] = useState({ name: '', isAuthorized: false });
  const value = useMemo(() => ({
    authUser, setAuthUser,
  }), [authUser]);

  useEffect(() => {
    const authUserObject = localStorage.getItem('auth');
    if (authUserObject) {
      setAuthUser(JSON.parse(authUserObject));
    }
  }, []);

  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <MyNav />
        <MyAppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;
