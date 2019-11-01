import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import "../styles/index.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <header>{<Header />}</header>
          <main>
            <nav>{<Navigation />}</nav>
            <section className="blog">{<Page />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
