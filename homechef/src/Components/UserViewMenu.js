import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

class UserViewChefList extends Component {
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

    const userviewList = chefs.map((chef) => {
      return (
        <ListGroupItem key={chef.chefid}>
          <section className="listItem">
            <div>
              <img id="chefavatar" src={chef.chefavatar} alt="Avatar" />
            </div>
            <bold>{chef.chefname}</bold>
            <p>{chef.chefspecialty}</p>
          </section>
          <section>
            <ul className="d-flex">
              {chef.chefmenus.map((item)=> <li className="flex-row" key={item.id}>
                <p>{item.desc}</p>
                <img src={item.image} alt="menu"></img>
                <p>{item.value}</p>
                <button>-</button>
                <button>+</button>
              </li>)}
            </ul>
          </section>
        </ListGroupItem>
      );
    });
    return (
      <div>
        <Container fluid>
          <ListGroup>{userviewList}</ListGroup>
        </Container>
      </div>
    );
  }
}

export default UserViewChefList;
