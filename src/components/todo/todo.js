import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { v4 as uuid } from 'uuid';
import Header from '../header/Header.js';
import Form from '../form/Form.js';
import List from '../list/List.js';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
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

  return (
    <>
      <Header incomplete={incomplete}/>
      <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
      <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
    </>
  );
};

export default ToDo;
