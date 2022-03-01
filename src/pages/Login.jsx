<<<<<<< HEAD
import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

function Login() {
=======
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

function Login() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { authUser, setAuthUser } = useContext(AuthContext);
  const submit = (e) => {
    e.preventDefault();

    const authUserObject = { name: 'React', isAuthorized: true };
    setAuthUser(authUserObject);
    localStorage.setItem('auth', JSON.stringify(authUserObject));

    navigate('/posts');
  };

>>>>>>> develop
  return (
    <div>
      <h1>Login</h1>
      <form>
        <MyInput type="text" placeholder="please fill in field" />
        <MyInput type="password" placeholder="please fill in field" />
<<<<<<< HEAD
        <MyButton>Login</MyButton>
=======
        <MyButton onClick={submit}>Login</MyButton>
>>>>>>> develop
      </form>
    </div>
  );
}

export default Login;
