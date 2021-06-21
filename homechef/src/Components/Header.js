import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Navbar";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Nav />
      </div>
    );
  }
}

export default Header;
