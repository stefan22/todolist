import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './navbar-comp.css';

class NavbarComp extends Component {
  render() {
    return (
      <div className="todoheader">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">TodoList</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
    
  }// render

}// NavbarComp class


export default NavbarComp;