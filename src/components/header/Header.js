import { Navbar, Alignment } from '@blueprintjs/core';
import './header.scss';


function Header(props) {

  return (
    <Navbar id='navBar'>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading id='heading'>To Do List: {props.incomplete} items pending</Navbar.Heading>
        <Navbar.Divider />
      </Navbar.Group>
    </Navbar>
  );
}

export default Header;

