import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchChefs } from "../Actions/chefActions";
import { Container } from "reactstrap";

class TestChefs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chefs: null,
    };
  }
  componentDidMount() {
    this.props.fetchChefs();
  }
  render() {
    // const { chefs } = this.state;
    const testList = this.props.chefs.map((chef) => {
      return (
        <li className="w-25" key={chef.chefid}>
          <div>
            <img
              id="chefavatar"
              src={chef.chefavatar}
              alt={`$chef.chefname avatar`}
            />
            <h5>{chef.chefname}</h5>
            <p>{chef.chefspecialty}</p>
            {/* <p>
              <FontAwesomeIcon icon={["fas", "star"]} /> {chef.chefratings}/5
            </p> */}
          </div>
        </li>
      );
    });
    return (
      <div>
        <Container fluid>
          <h3>Available Chefs:</h3>
          <ul className="d-flex flex-row justify-content-center">{testList}</ul>
        </Container>
      </div>
    );
  }
}

export default TestChefs;
