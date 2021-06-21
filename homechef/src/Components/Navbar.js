import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav class="navbar sticky-top navbar-expand-md navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img src="images/logo3.png" alt="Main Logo"></img>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/menus">
              Menus
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cart">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
