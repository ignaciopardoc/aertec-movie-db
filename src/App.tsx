import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import FilmDetail from "./components/FilmDetail/FilmDetail";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detail/:movieId">
          <FilmDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
