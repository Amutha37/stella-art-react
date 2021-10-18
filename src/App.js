import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
const Home = lazy(() => import("./components/pages/home/Home"));
// import Home from "./components/pages/home/Home";
const About = lazy(() => import("./components/pages/about/About"));
// import About from "./components/pages/about/About";

const Contact = lazy(() => import("./components/pages/contact/Contact"));
// import Contact from "./components/pages/contact/Contact";

const Florals = lazy(() => import("./components/pages/floral/Florals"));
// import Florals from "./components/pages/floral/Florals";

const Mastercopies = lazy(() =>
  import("./components/pages/mastercopies/Mastercopies")
);
// import Mastercopies from "./components/pages/mastercopies/Mastercopies";

const BirdAnimal = lazy(() => import("./components/pages/wildlife/BirdAnimal"));
// import BirdAnimal from "./components/pages/wildlife/BirdAnimal";

const Sold = lazy(() => import("./components/pages/sold/Sold"));
// import Sold from "./components/pages/sold/Sold";

const Nature = lazy(() => import("./components/pages/nature/Nature"));
// import Nature from "./components/pages/nature/Nature";

const Portraits = lazy(() => import("./components/pages/portrait/Portraits"));
// import Portraits from "./components/pages/portrait/Portraits";

const Petportraits = lazy(() =>
  import("./components/pages/petportrait/Petportraits")
);
// import Petportraits from "./components/pages/petportrait/Petportraits";

const App = () => {
  return (
    // <Fragment>
    <Suspense
      fallback={
        <div className="container-loader">
          <div className="flex">
            <div className="loader"></div>
          </div>
          <div className="load-text">Loading...</div>
        </div>
      }
    >
      <Router>
        <Navbar />

        {/* new  */}
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />

          <Route path="/contact" component={Contact} />

          <Route path="/nature" component={Nature} />

          <Route path="/mastercopies" component={Mastercopies} />

          <Route path="/portraits" component={Portraits} />

          <Route path="/petportraits" component={Petportraits} />

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
    </Suspense>
  );
};
export default App;
