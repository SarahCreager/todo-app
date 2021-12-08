import React from 'react';
import './app.scss';
import Login from './components/login/Login.js';
import Auth from './components/auth/Auth.js';
import { useEffect, useState, useContext } from 'react';
import useForm from './hooks/form.js';
import { v4 as uuid } from 'uuid';
import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import List from './components/list/List.js';
import ViewOptions from './components/viewOptions/viewOptions.js';
import { SettingsContext } from './context/settings.js';
import './app.scss';
import SignUp from './components/signUp/SignUp';
import axios from 'axios';

const DATABASE_URL = process.env.REACT_APP_URL;

export default function App() {
  const settings = useContext(SettingsContext);
  settings;
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);


  async function addItem(item) {
    item.id = uuid();
    item.complete = false;

    if (!list.includes(item)) {
      let response = await axios.post(`${DATABASE_URL}/todo`, { text: item.text, assignee: item.assignee, complete: item.complete, difficulty: item.difficulty});
      setList([...list, response.data]);
    } else {
      alert('That to-do item already exsists!');
    }
  }

  async function deleteItem(id) {
    await axios.delete(`${DATABASE_URL}/todo/${id}`);
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  async function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);


  useEffect(() => {
    handleGet();
    // pull user preferences from storage on page load
    let storage = localStorage.getItem('userPreferences');
    if (storage) {
      let parsedObject = JSON.parse(storage);
      settings.setNumberOfItems(parsedObject.numberOfItems);
      settings.setCompleted(parsedObject.showCompleted);
    }
  }, []);

  async function handleGet() {
    let response = await axios.get(`${DATABASE_URL}/todo`);
    setList(response.data);
  }

  return (
    <>
      <Login />
      <SignUp />
      <Auth capability="read">
        <Header incomplete={incomplete} />
      </Auth>
      <Auth capability="read">
        <div id="formContainer">
          <ViewOptions />
          <Auth capability="create">
            <Form handleSubmit={handleSubmit} handleChange={handleChange} />
          </Auth>
        </div>
      </Auth>
      <Auth capability="read">
        <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
      </Auth>
    </>
  );
}
