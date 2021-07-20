import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailsLayout from './components/DetailsLayout/DetailsLayout';

const App = () => (
  <div className="app-wrapper">
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Hero />
        </Route>
        <Route exact path='/details'>
          <DetailsLayout />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
