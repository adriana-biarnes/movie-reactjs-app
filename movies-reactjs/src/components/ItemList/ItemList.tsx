import 'antd/dist/antd.css';
import { Card } from 'antd';
import { AppState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMoviesShowsListService } from '../../redux/effects/MoviesService';
interface ItemListProps {
  id: number,
  title: string;
  rating: number;
  picture: string;
}

const pictureUrl = 'https://image.tmdb.org/t/p/w500';

const ItemList: React.FC<ItemListProps> = ({ id, title, rating, picture }) => {
  const { Meta } = Card;
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="Coming soon" src={`${pictureUrl}${picture}`} />}
      >
        <Meta title={title} description={rating} />
      </Card>
    </>
  );
};

export default ItemList;
