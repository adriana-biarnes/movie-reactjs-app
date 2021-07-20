import { Col, Row } from 'antd';
import './MoviesList.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesShowsListService } from '../../redux/effects/MoviesService';
import { AppState } from '../../redux/store';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// const handleSeeDetails = () => {
//   alert('details');
// };

const MoviesList: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesShowsListService());
  }, [dispatch]);

  const { moviesShowsList } = useSelector(
    (state: AppState) => state.moviesShowsList
  );

  return (
    <div className="movies-wrapper">
      <Row>
        <Col span={24} className="movies-list-title">
          <p>complete list of movies and tv shows</p>
        </Col>
      </Row>
      <Row className="list-container">
        {moviesShowsList ? (
          moviesShowsList.map((item: any) => (
            <Col span={6} key={item.id}>
              <Link to='/details'>
                <ItemList
                  id={item.id}
                  title={item.original_title}
                  rating={item.vote_average}
                  picture={item.poster_path}
                />
              </Link>
            </Col>
          ))
        ) : (
          <Spinner />
        )}
      </Row>
    </div>
  );
};

MoviesList.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};

export default MoviesList;
