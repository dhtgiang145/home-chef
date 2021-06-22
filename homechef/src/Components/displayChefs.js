import React,{Component} from "react";
import {Container} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class DisplayChefs extends Component {
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
    const homeList = chefs.map((chef) => {
      return (
        <li className="w-25" key={chef.chefid}>
          <div>
          <img id="chefavatar" src={chef.chefavatar} alt={`$chef.chefname avatar`}/>
          <h5>{chef.chefname}</h5>
          <p>{chef.chefspecialty}</p>
          <p><FontAwesomeIcon icon={["fas","star"]}/> {chef.chefratings}/5</p>
          </div>
        </li>
      );
    });
    return (
      <div>
        <Container fluid>
          <h3>Available Chefs:</h3>
          <ul className="d-flex flex-row justify-content-center">{homeList}</ul>
        </Container>
      </div>
    );
  }
}

export default DisplayChefs;