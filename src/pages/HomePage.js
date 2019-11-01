import React from "react";
import Article from "../components/Article";

const articles = [
  { id: 1, title: "Czym jees teoria strun", author: "Dżej Nowak", text: "KSADdddddddddd" },
  { id: 2, title: "Czym jees teoria strun", author: "Dżej Nowak", text: "KSADdddddddddd" },
  { id: 3, title: "Czym jees teoria strun", author: "Dżej Nowak", text: "KSADdddddddddd" }
];

const HomePage = () => {
  const artList = articles.map(article => <Article key={article.id} {...article} />);
  return <div className="home">{artList}</div>;
};

export default HomePage;
