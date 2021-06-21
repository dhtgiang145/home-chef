import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Table } from "reactstrap";

class ManageChefList extends Component {
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
  removeChef = async (id) => {
    await fetch(`api/chef/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("Remove chef done!");
    let updateChefs = [...this.state.chefs].filter((i) => i._id !== id);
    this.setState({ chefs: updateChefs });
  };
  render() {
    const { chefs, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ....</p>;
    }
    const manageList = chefs.map((chef) => {
      return (
        <tr key={chef._id}>
          <td>{chef.chefname}</td>
          <td>{chef.chefspecialty}</td>
          <td>{chef.chefratings}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={"/chefs/" + chef._id}
              >
                Edit
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => this.removeChef(chef._id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <Container fluid>
          <h3>Chef List</h3>
          <Table>
            <thead>
              <tr>
                <th>Chef Name</th>
                <th>Chef Specialty</th>
                <th>Chef Ratings</th>
              </tr>
            </thead>
            <tbody>{manageList}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default ManageChefList;
