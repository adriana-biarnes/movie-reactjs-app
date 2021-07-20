import Item from 'antd/lib/list/Item';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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

  return (
      <Carousel indicators={false} interval={null} className="carousel-wrapper">
        {moviesShowsList &&
          moviesShowsList.map((item: any) => (
            <Carousel.Item key={item.id}>
              <img
                className="carousel-picture"
                src={`${pictureUrl}${item.poster_path}`}
                alt="First slide"
              />
              <Link to='/details'>
                <Carousel.Caption className="carousel-info">
                  {
                    item.original_title ? (
                    <p className="hero-info hero-title">{item.original_title}</p>
                    ) : <p className="hero-info hero-title">Guess the title</p>
                  }
                    <p className="hero-info hero-rating">{`${item.vote_average} /10`}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
      </Carousel>
  );
};

export default Hero;
