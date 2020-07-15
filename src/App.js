import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";
import Navbar from "./components/homepage/navbar/Navbar";
import Jumbotron from "./components/homepage/jumbotrons/Jumbotron";
import LoginModal from "./components/homepage/loginModal/LoginModal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Breeds from "./components/breedpage/Breeds";

function App() {
  return (
    <Router>
      <Navbar />
      <LoginModal />
      {/* <Search/> */}
      <Switch>
        <Route exact={true} path="/">
          <Jumbotron />
        </Route>
        <Route path="/breeds">
          <Breeds />
        </Route>
        <Route path="/resources/breeders/">
          <Breeds />
        </Route>
        <Route path="/resources/dog-care">
          <Breeds />
        </Route>
        <Route path="/resources/services">
          <Breeds />
        </Route>
        <Route path="/resources/about-us">
          <Breeds />
        </Route>
        <Route path="/me"></Route>
      </Switch>
    </Router>
  );
}

export default App;
