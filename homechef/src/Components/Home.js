import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayChefs from "./displayChefs";
import TopOrderItems from "./TopOrderItems";

export default function Home(props) {
  return (
    <div className="home">
      <DisplayChefs chefs={props.chefs} />
      <TopOrderItems chefs={props.chefs} />
    </div>
  );
}
