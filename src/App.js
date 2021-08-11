import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
// import "./App.css";

import Navbar from "./components/Navbar/Navbar";
// import Navapp from "./components/Navbar/Navapp";

import Home from "./components/pages/Home";

import Painting from "./components/pages/Painting";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import Florals from "./components/pages/Florals";
import BirdAnimal from "./components/pages/BirdAnimal";
import Commissions from "./components/pages/Commissions";
import Nature from "./components/pages/Nature";
import Portraits from "./components/pages/Portraits";
import "./App.css";
//

const App = () => {
  return (
    <div>
      <div className="appheader">
        <p>Stella Kypriotis Fine Art</p>
      </div>
      <Router>
        <Navbar />
        {/* <Navapp /> */}
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          
        </Switch> */}
        {/* new  */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/paintingsale" component={Painting} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/sign-up" component={SignUp} /> */}
          <Route path="/nature" component={Nature} />
          <Route path="/portraits" component={Portraits} />
          <Route path="/florals" component={Florals} />
          <Route path="/birdanimal" component={BirdAnimal} />
          <Route path="/commissions" component={Commissions} />
          {/* home page */}
          <Route>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Home} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
