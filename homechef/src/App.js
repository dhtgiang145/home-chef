import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Menus from "./Components/Menus";
import Cart from "./Components/Cart";
import ManageChefList from "./Components/Admin";
import UserViewChefList from "./Components/UserViewMenu";
// Global use of fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// Redux
import store from "./store.js";
import { Provider } from "react-redux";

// Library Creation
library.add(fas);

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chefs:[],
//       isLoading: true
//     };
//   }
//   componentDidMount() {
//     this.setState({ isLoading: true });
//     fetch("api/chefs")
//       .then((response) => response.json())
//       .then((data) => this.setState({ chefs: data, isLoading: false }));
//   }

//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Header />
//           <Switch>
//             <Route exact path="/">
//               <Home chefs={this.state.chefs} />
//             </Route>
//             <Route exact path="/menus">
//               <UserViewChefList />
//             </Route>
//             <Route exact path="/cart">
//               <Cart />
//             </Route>
//             <Route exact path="/chefs" component={ManageChefList} />
//           </Switch>
//           <Footer />
//         </div>
//       </Router>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                <Home chefs={this.state.chefs} />
              </Route>
              <Route exact path="/menus">
                <UserViewChefList />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/chefs" component={ManageChefList} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
