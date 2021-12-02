import { useContext } from 'react';
import { SettingsContext } from '../../context/settings.js';
import { Navbar, Alignment } from '@blueprintjs/core';
import './header.scss';


function Header(props) {

  // pass our context singleton into our useContext hook
  let settings = useContext(SettingsContext);

  return (
    <Navbar id='navBar'>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>To Do List: {props.incomplete} items pending</Navbar.Heading>
        <Navbar.Divider />
      </Navbar.Group>
    </Navbar>
  );
}

export default Header;

