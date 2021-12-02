import React from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import './listItem.scss';

const ListItem = (props) => {
  return (
    <Card id='todoCard' interactive={true} elevation={Elevation.FOUR} key={props.item.id}>
      <h5>{props.item.text}</h5>
      <p><small>Assigned to: {props.item.assignee}</small></p>
      <p><small>Difficulty: {props.item.difficulty}</small></p>
      <Button onClick={() => props.toggleComplete(props.item.id)}>Complete: {props.item.complete.toString()}
      </Button>
      <Button onClick={() => props.deleteItem(props.item.id)}>Delete</Button>
    </Card>
  );
};

export default ListItem;
