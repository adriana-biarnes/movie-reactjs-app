import { Col, Row } from 'antd';
import './SimilarsList.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSimilarListService } from '../../redux/effects/SimilarService';
import { AppState } from '../../redux/store';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDetailsService } from '../../redux/effects/DetailsService';

interface SimilarListProps {
  movieId: number,
}

const SimilarList: React.FC<SimilarListProps> = ({movieId}) => {
  const dispatch = useDispatch();

  dispatch(getSimilarListService(movieId));
  
  const { similarList } = useSelector(
    (state: AppState) => state.similarList
  );

  return (
    <div className="movies-wrapper">
      <Row>
        <Col span={24} className="movies-list-title">
          <p>related movies and tv shows that you might like</p>
        </Col>
      </Row>
      <Row className="list-container">
        {similarList ? (
          similarList.map((similarItem: any) => (
            <Col span={6} key={similarItem.id}>
                <ItemList
                  id={similarItem.id}
                  title={similarItem.original_title}
                  rating={similarItem.vote_average}
                  picture={similarItem.poster_path}
                />
            </Col>
          ))
        ) : (
          <Spinner />
        )}
      </Row>
    </div>
  );
};

export default SimilarList;
