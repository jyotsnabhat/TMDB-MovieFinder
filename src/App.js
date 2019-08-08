import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import MovieDetails from "./components/movies/MovieDetails";

import "./App.css";

import { ContextController } from "./context";

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          {/*<Navbar />*/}
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/movie/:id" component={MovieDetails} />
            </Switch>
        </>
      </Router>
    </ContextController>
  );
};

export default App;
