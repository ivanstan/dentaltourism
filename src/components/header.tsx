import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export class Header extends React.Component<any, any> {

  public render() {
    return <header>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </Nav>
          <Nav className="ml-auto">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>;
  }
}
