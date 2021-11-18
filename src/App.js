import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const Home = lazy(() => import('./components/pages/home/Home'));

const About = lazy(() => import('./components/pages/about/About'));

const Commissions = lazy(() =>
  import('./components/pages/commissions/Commissions')
);

const Contact = lazy(() => import('./components/pages/contact/Contact'));

const Florals = lazy(() => import('./components/pages/floral/Florals'));

const Mastercopies = lazy(() =>
  import('./components/pages/mastercopies/Mastercopies')
);

const BirdAnimal = lazy(() => import('./components/pages/wildlife/BirdAnimal'));

const Sold = lazy(() => import('./components/pages/sold/Sold'));
const Nature = lazy(() => import('./components/pages/nature/Nature'));

const Portraits = lazy(() => import('./components/pages/portrait/Portraits'));

const Petportraits = lazy(() =>
  import('./components/pages/petportrait/Petportraits')
);
const FrequentlyAskedQuestions = lazy(() =>
  import('./components/pages/fquestionsAsked/FrequentlyAskedQuestions')
);

const App = () => {
  return (
    <Suspense
      fallback={
        <div className='container-loader'>
          <div className='flex'>
            <div className='loader'></div>
          </div>
          <div className='load-text'>Loading...</div>
        </div>
      }
    >
      <Router>
        <Navbar />

        {/* new  */}
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/about' component={About} />

          <Route path='/commissions' component={Commissions} />

          <Route path='/contact' component={Contact} />

          <Route path='/nature' component={Nature} />

          <Route path='/mastercopies' component={Mastercopies} />

          <Route path='/portraits' component={Portraits} />

          <Route path='/petportraits' component={Petportraits} />

          <Route path='/florals' component={Florals} />

          <Route path='/birdanimal' component={BirdAnimal} />

          <Route path='/sold' component={Sold} />

          <Route path='/faquestions' component={FrequentlyAskedQuestions} />

          {/* home page */}
          <Route>
            <Redirect exact from='/' to='/home' />
            <Route exact path='/home' component={Home} />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};
export default App;
