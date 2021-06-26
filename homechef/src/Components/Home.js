import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import DisplayChefs from "./displayChefs";
import TopOrderItems from "./TopOrderItems";
import TestChefs from "./displayChefCopy";

export default function Home(props) {
  return (
    <div className="home">
      <TestChefs chefs={props.chefs} />
      <TopOrderItems chefs={props.chefs} />
    </div>
  );
}
