import React, {Component} from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";

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
  increaseQty = (addvalue) => {
    if (addvalue.value < 10) {
      const updatedValue = addvalue.value++;
      this.setState({ updatedValue });
    }
  };
  decreaseQty = (decvalue) => {
    if (decvalue.value > 0) {
      const updatedValue = decvalue.value--;
      this.setState({ updatedValue });
    }
  };
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
            <ul className="d-flex flex-row">
              {chef.chefmenus.map((item) => (
                <li className="w-50" key={item.id}>
                  <p>{item.desc}</p>
                  <img id="footimage" src={item.image} alt="menu"></img>
                  <p>{item.value}</p>
                  <button onClick={() => this.decreaseQty(item)}>
                    -
                  </button>
                  <button onClick={() => this.increaseQty(item)}>
                    +
                  </button>
                </li>
              ))}
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

