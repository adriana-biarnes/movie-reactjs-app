import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesShowsListService } from '../../redux/effects/MoviesService';
import { AppState } from '../../redux/store';
import './Hero.css';

const pictureUrl = 'https://image.tmdb.org/t/p/w500';

const Hero = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesShowsListService());
  }, [dispatch]);

  const { moviesShowsList } = useSelector(
    (state: AppState) => state.moviesShowsList
  );
  console.log('!!!!!!!!!!!!!!!!!', moviesShowsList);

  return (
    <div className="hero-container">
      <Carousel arrows>
        {moviesShowsList && (
          moviesShowsList.map((item: any) => (
            <div>
              <img src={`${pictureUrl}${item.poster_path}`}/>
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
};

export default Hero;
