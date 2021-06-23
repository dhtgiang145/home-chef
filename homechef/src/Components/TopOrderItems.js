import React, { Component } from "react";
import { Container } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TopOrderItems extends Component {
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
    const topOrder = chefs.map((chef) => {
      return (
        <ul className="d-flex" key={chef.chefid}>
        {chef.chefmenus.map((item)=>{
          return (
            []
          )
        }).concat().sort((a,b) => a.ordered - b.ordered ? 1 : -1).slice(0,6)}
        </ul>
      );
    });
    return (
      <div>
        <Container fluid>
          <h3>Top Order Items:</h3>
          <section className="d-flex flex-row justify-content-center">
            {topOrder}
          </section>
        </Container>
      </div>
    );
  }
}

export default TopOrderItems;
