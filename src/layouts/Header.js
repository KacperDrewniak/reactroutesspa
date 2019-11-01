import React from "react";
import "../styles/header.css";
import { Route, Switch } from "react-router-dom";

const Header = () => {
  const img1 = "https://cdn.pixabay.com/photo/2017/08/06/18/05/pumpkin-2594747__340.jpg";
  const img2 = "https://cdn.pixabay.com/photo/2016/01/22/23/06/flash-1156822__340.jpg";
  const img3 = "https://cdn.pixabay.com/photo/2017/10/31/15/16/halloween-2905531__340.jpg";

  const images = [img1, img2, img3];
  const index = Math.floor(Math.random() * 3);

  const img = images[index];
  return (
    // <Switch>
    //   <Route path="/" exact render={() => <img src={img1} />} />
    //   <Route path="/products" render={() => <img src={img2} />} />
    //   <Route path="/admin" render={() => <img src={img3} />} />
    //   <Route path="/contact" render={() => <img src={img2} />} />
    //   <Route render={() => <img src={img2} />} />
    // </Switch>
    <>
      <img src={img} alt="header" />
    </>
  );
};

export default Header;
