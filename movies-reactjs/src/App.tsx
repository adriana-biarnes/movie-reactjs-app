import { getMoviesShowsListService } from './redux/effects/MoviesService';
import { MoviesShowsList } from './redux/interfaces/MoviesShowsList';
import { AppState } from './redux/store';
import MoviesList from './components/MoviesList/MoviesList';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

const App = () => (
  <>
    <Header />
    <Hero />
    {/* {movies && movies.map((movieItem: Movie) => (
      <div key={movieItem.id}>
        <MoviesList title={movieItem.title} /> 
      </div>
    ))} */}
    <MoviesList />
  </>
);

export default App;
