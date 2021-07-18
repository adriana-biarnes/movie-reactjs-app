import { Card, Col, Row } from 'antd';
import './MoviesList.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesShowsListService } from '../../redux/effects/MoviesService';
import { AppState } from '../../redux/store';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import Meta from 'antd/lib/card/Meta';

const handleSeeDetails = () => {
  alert('details');
};

const pictureUrl = 'https://image.tmdb.org/t/p/w500';

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
          <h2>more movies</h2>
        </Col>
      </Row>
      <Row>
        {moviesShowsList ? (
          moviesShowsList.map((item: any) => (
            <Col span={6} key={item.id}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt='Coming soon'
                    src={`${pictureUrl}${item.poster_path}`}
                  />
                }
              >
                <Meta title={item.original_title} description={item.vote_average} />
              </Card>
            </Col>
          ))
        ) : (
          <Spinner />
        )}
      </Row>
    </div>
  );
};

export default MoviesList;

// return (
//   <div className="movie-list">
//       {movies?
//           movies.map(item=>(
//               item.poster_path?
//               <div key={item.id}
//                   className="item text-dark">
//               <h1>{item.title}</h1>
//               <img
//                   loading="lazy"
//                   src={`${process.env.REACT_APP_IMG_URL}${item.poster_path}`}
//                   alt={`${item.title}`} />
//               <FavoriteButton item={item}/>
//               <button className="button-icon bottom"
//                   onClick={()=>{viewMovie(item.id)}}>
//                   <Link to={`/detail/${item.id}`}>
//                       <i className="fas fa-question-circle text-light"></i>
//                   </Link>
//               </button>
//               <small className="item-vote">{item.vote_average}</small>
//               </div>
//               :null
//           ))
//       :<Spinner />}
//   </div>
//   );
// }

// export default MovieList;
