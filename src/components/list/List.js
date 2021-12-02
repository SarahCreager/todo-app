import { useContext } from 'react';
import { SettingsContext } from '../../context/settings.js';
import { Button, Card, Elevation } from '@blueprintjs/core';
import './list.scss';

function List(props) {

  // pass our context singleton into our useContext hook
  let settings = useContext(SettingsContext);

  return (
    <>
      {props.list.map(item => (
        <Card id='todoCard' interactive={true} elevation={Elevation.FOUR} key={item.id}>
          <h5>{item.text}</h5>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}
          </Button>
        </Card>
      ))}
    </>
  );
}

export default List;