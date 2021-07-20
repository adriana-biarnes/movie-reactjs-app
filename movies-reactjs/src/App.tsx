import { getMoviesShowsListService } from './redux/effects/MoviesService';
import { MoviesShowsList } from './redux/interfaces/MoviesShowsList';
import { AppState } from './redux/store';
import MoviesList from './components/MoviesList/MoviesList';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailsLayout from './components/DetailsLayout/DetailsLayout';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Hero />
          <MoviesList />
        </Route>
        <Route exact path='/details'>
          <DetailsLayout />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
