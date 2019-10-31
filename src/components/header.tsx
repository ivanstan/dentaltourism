import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export class Header extends React.Component<any, any> {

  public render() {
    return <header>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="nav-link" exact to="/">Stratseite</NavLink>
            <NavLink className="nav-link" exact to="/anfrage">Anfrage</NavLink>
            <NavLink className="nav-link" exact to="/partners">Zahnarztpraxen</NavLink>
            <NavLink className="nav-link" exact to="/about">Über Serbien</NavLink>
            <NavLink className="nav-link" exact to="/contact">Kontakt</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>;
  }
}
