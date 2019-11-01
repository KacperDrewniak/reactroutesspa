import React from "react";
import { Route } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={props => {
          console.log(props);
          return <p>Dodatkowe informacje</p>;
        }}
      />
    </>
  );
};

export default Footer;
