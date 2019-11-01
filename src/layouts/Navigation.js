import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";
const list = [
  { name: "Start", path: "/", exact: true },
  { name: "Produkty", path: "/products" },
  { name: "Kontakt", path: "/contact" },
  { name: "Panel", path: "/admin" }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink exact={item.exact ? item.exact : false} to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
