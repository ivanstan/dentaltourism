import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export class Header extends React.Component<any, any> {

  public anfrageClick() {
    window.location.hash = '#/';

    setTimeout(() => {
      let element = window.document.getElementById('anfrage');

      if (element) {
        let position = element.getBoundingClientRect();

        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: position.top
        });
      }
    }, 0);
  }

  public render() {
    return <header>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="nav-link" exact to="/">Startseite</NavLink>
            <a className="nav-link" href="#" onClick={() => this.anfrageClick()}>Anfrage</a>
            <NavLink className="nav-link" exact to="/partners">Zahnarztpraxen</NavLink>
            <NavLink className="nav-link" exact to="/about">Über Serbien</NavLink>
            <NavLink className="nav-link" exact to="/contact">Kontakt</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>;
  }
}
