import React from 'react';
import './app.scss';
import ToDo from './components/todo/todo.js';
import LoginContext from './context/auth.js';

export default class App extends React.Component {
  render() {
    return (
      <LoginContext>
         <ToDo />
      </LoginContext>
    );
  }
}
