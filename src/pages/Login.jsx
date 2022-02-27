import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <MyInput type="text" placeholder="please fill in field" />
        <MyInput type="password" placeholder="please fill in field" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
}

export default Login;
