import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chefs: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("api/chefs")
      .then((response) => response.json())
      .then((data) => this.setState({ chefs: data, isLoading: false }));
  }
  render() {
    const { chefs, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ....</p>;
    }
    const cartItems = chefs.map((chef) => {
      return <div key={chef.chefid}>
        {chef.chefmenus.map((item) => {
          return item.value
        }).filter((item) => item.value > 0)}
        </div>;
    });
  
    const cartContent = !!cartItems.length ? (
      <div>
        <button className="btn bg-success my-3">
          <a href="/signin" className="text-white">
            Check Out
          </a>
        </button>
      </div>
    ) : (
      <div className="d-flex flex-column align-items-start">
        <h5 className="mx-5 py-1">There are 0 items in your cart</h5>
        <button className="btn bg-success mx-5">
          <a href="/" className="text-white">
            Continue Shop
          </a>
        </button>
      </div>
    );
    return (
      <div className="block">
        <h4 className="mt-5">Your Cart Items</h4>
        {cartContent}
      </div>
    );
  }
}

export default Cart;
