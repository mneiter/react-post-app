import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

function MyGreeting() {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const clickLogout = () => {
    setAuthUser({ name: '', isAuthorized: false });
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div>
      <p>
        Hello
        {' '}
        {authUser?.name}
        <MyButton onClick={() => clickLogout()}>logout</MyButton>
      </p>

    </div>
  );
}

export default MyGreeting;
