import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = ({ match }) => {
  return (
    <>
      <h4>Strona Produktu</h4>
      <Product id={match.params.id} />
      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProductPage;
