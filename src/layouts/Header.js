import React from "react";
import "../styles/header.css";

const Header = () => {
  const img1 = "https://cdn.pixabay.com/photo/2017/08/06/18/05/pumpkin-2594747__340.jpg";
  const img2 = "https://cdn.pixabay.com/photo/2016/01/22/23/06/flash-1156822__340.jpg";
  const img3 = "https://cdn.pixabay.com/photo/2017/10/31/15/16/halloween-2905531__340.jpg";
  return (
    <div>
      <img src={img1} alt="" />
    </div>
  );
};

export default Header;
