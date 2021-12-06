import React from 'react';
import './app.scss';
import ToDo from './components/todo/todo.js';
import Login from './components/login/Login.js';
import Auth from './components/auth/Auth.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Login />
        <Auth >
          <ToDo />
        </Auth>
      </>
    );
  }
}
