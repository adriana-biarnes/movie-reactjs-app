import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import { getSimilarListService } from '../../redux/effects/SimilarService';
import { AppState } from '../../redux/store';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import './SimilarsList.css';
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
          <p className="related-title">related movies and tv shows that you might like</p>
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
