import React from 'react';
import './app.scss';
import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <ToDo />
    );
  }
}
