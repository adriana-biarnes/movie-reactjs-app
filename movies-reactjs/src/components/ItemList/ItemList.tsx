import 'antd/dist/antd.css';
import { Card } from 'antd';
import { AppState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMoviesShowsListService } from '../../redux/effects/MoviesService';

const ItemList = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesShowsListService());
  }, [dispatch]);
  const movieInformation = useSelector(
    (state: AppState) => state.moviesShowsList
  );
  console.log('AAAAAAAAAAA', movieInformation);

  const { Meta } = Card;
  return (
    <>
      {/* <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt="Coming soon" src={`${pictureUrl}${item.poster_path}`} />
        }
      >
        <Meta title={item.original_title} description={item.vote_average} />
      </Card> */}
    </>
  );
};

export default ItemList;
