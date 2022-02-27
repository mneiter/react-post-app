import React, { useContext } from 'react';
import { AuthContext } from '../../../context';

function MyGreeting() {
  const { authUser } = useContext(AuthContext);
  return (
    <p>
      Hello
      {' '}
      {authUser?.name}
    </p>
  );
}

export default MyGreeting;
