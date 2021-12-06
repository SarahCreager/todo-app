import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';

export const AuthContext = React.createContext();

// dummy users for testing
const testUsers = {
  admin: {
    username: 'admin',
    password: 'test',
    role: 'admin',
    capabilities: ['create', 'read', 'update', 'delete'],
  },
  editor: {
    username: 'editor',
    password: 'test',
    role: 'editor',
    capabilities: ['read', 'update'],
  },
  writer: {
    username: 'writer',
    password: 'test',
    role: 'writer',
    capabilities: ['create'],
  },
};

const SECRET = process.env.REACT_APP_SECRET || 'secretstring';

function AuthProvider(props) {
  const [token, setToken] = useState();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  let state = {
    isLoggedIn,
    user,
    login,
    logout,
    token,
    validateToken,
    isAuthorized,
    setLogInState
  };

  function isAuthorized(capability) {
    // check user capilities and return a boolean
    return user?.capabilities?.includes(capability);
  }

  function login(username, password) {
    if (testUsers[username]) {
      const token = jwt.sign(testUsers[username], SECRET);
      validateToken(token);
    }
  }

  function logout() {
    if (isLoggedIn) {
      setLogInState(false, null, {});
    }
  }

  function validateToken(token) {
    let user = jwt.verify(token, SECRET);
    if (user){
      setLogInState(true, token, user);
    } else {
      setLogInState(false, null, {});
      console.log('Error validating token');
    }
  }

  function setLogInState(boolean, token, user) {
    setLoggedIn(boolean);
    setToken(token);
    setUser(user);
  }

  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;