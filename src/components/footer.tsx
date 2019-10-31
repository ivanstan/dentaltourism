import React from 'react';
import {NavLink} from "react-router-dom";

const link = {
  color: '#fff'
};

export class Footer extends React.Component<any, any> {

  public render() {
    return <footer className="bg-primary d-flex justify-content-center p-4">
      <NavLink className="nav-link" exact to="/imprint" style={link}>Impressum</NavLink>
      <NavLink className="nav-link" exact to="/terms" style={link}>Datenschutz</NavLink>
    </footer>;
  }
}
