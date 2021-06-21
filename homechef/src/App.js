import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Menus from "./Components/Menus";
import Cart from "./Components/Cart";
import { chefs } from "./menus.js";
import ManageChefList from "./Components/Admin";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: chefs,
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home chefs={this.state.data} />
            </Route>
            <Route exact path="/menus">
              <Menus />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="/chefs" exact="true" component={ManageChefList} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
