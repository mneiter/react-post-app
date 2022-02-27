import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

function Login() {
  // eslint-disable-next-line no-unused-vars
  const { authUser, setAuthUser } = useContext(AuthContext);
  const submit = (e) => {
    e.preventDefault();
    setAuthUser({ name: 'React', isAuthorized: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <MyInput type="text" placeholder="please fill in field" />
        <MyInput type="password" placeholder="please fill in field" />
        <MyButton onClick={submit}>Login</MyButton>
      </form>
    </div>
  );
}

export default Login;
