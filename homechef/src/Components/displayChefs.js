import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
// import { Modal } from "react-bootstrap";
// import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./App.css";

export default function ChefList(props) {
  const { chefs = [] } = props;
  const listChefs = chefs.map((chef) => {
    return (
      <ListGroupItem
        key={chef.chefid}
        className="d-flex flex-row align-items-center"
      >
        <section className="listItem col-5">
          <h5>{chef.chefname}</h5>
          <p>{chef.chefspecialty}</p>
          <p>Ratings: {chef.chefratings}/5</p>
        </section>
      </ListGroupItem>
    );
  });
  return (
    <div>
      <ListGroup>{listChefs}</ListGroup>
    </div>
  );
}
