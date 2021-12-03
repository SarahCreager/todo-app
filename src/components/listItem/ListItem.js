import React from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { useContext } from 'react';
import { SettingsContext } from '../../context/settings.js';
import './listItem.scss';

const ListItem = (props) => {
  const settings = useContext(SettingsContext);
  settings;

  function handleComplete() {
    props.toggleComplete(props.item.id);
    if (props.item.complete === true && settings.showCompleted === 'false') {
      props.deleteItem(props.item.id);
    }
  }

  return (
    <Card id='todoCard' interactive={true} elevation={Elevation.FOUR} key={props.item.id}>
      <h5>{props.item.text}</h5>
      <p><small>Assigned to: {props.item.assignee}</small></p>
      <p><small>Difficulty: {props.item.difficulty}</small></p>
      <Button id="complete" onClick={handleComplete}>Complete: {props.item.complete.toString()}
      </Button>
      <Button id="delete" onClick={() => props.deleteItem(props.item.id)}>Delete</Button>
    </Card>
  );
};

export default ListItem;
