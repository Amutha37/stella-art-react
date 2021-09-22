import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { Fragment } from "react";

import Navbar from "./components/Navbar/Navbar";

import Home from "./components/pages/Home";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import Florals from "./components/pages/floral/Florals";
import BirdAnimal from "./components/pages/wildlife/BirdAnimal";
import Sold from "./components/pages/sold/Sold";
import Nature from "./components/pages/nature/Nature";

import Portraits from "./components/pages/portrait/Portraits";
import "./App.css";
//

const App = () => {
  return (
    <Fragment>
      {/* <div className="appheader">
        <p>Stella Kypriotis Fine Art</p>
      </div> */}
      <Router>
        <Navbar />

        {/* new  */}
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />

          <Route path="/contact" component={Contact} />

          <Route path="/nature" component={Nature} />

          <Route path="/portraits" component={Portraits} />

          <Route path="/florals" component={Florals} />

          <Route path="/birdanimal" component={BirdAnimal} />

          <Route path="/commissions" component={Sold} />

          {/* home page */}
          <Route>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Home} />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};
export default App;
