import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChefList from "./displayChefs";

export default function Home(props) {
  return (
    <div className="home">
      <h2>This is home page</h2>
      <ChefList chefs={props.chefs} />
    </div>
  );
}
