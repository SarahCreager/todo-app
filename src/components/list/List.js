import { useContext } from 'react';
import { SettingsContext } from '../../context/settings.js';
import ListItem from '../listItem/ListItem.js';
import './list.scss';

function List(props) {

  // pass our context singleton into our useContext hook
  let settings = useContext(SettingsContext);

  return (
    <>
      {props.list.map(item => (
        <ListItem item={item} toggleComplete={props.toggleComplete} deleteItem={props.deleteItem}/>
      ))}
    </>
  );
}

export default List;