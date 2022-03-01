import { createContext } from 'react';

export const AuthContext = createContext({ name: '', isAuthorized: false });
