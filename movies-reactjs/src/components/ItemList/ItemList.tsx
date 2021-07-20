import 'antd/dist/antd.css';
import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import { getDetailsService } from '../../redux/effects/DetailsService';
import './ItemList.css';
import { useState } from 'react';
interface ItemListProps {
  id: number;
  title: string;
  rating: number;
  picture: string;
}

const pictureUrl = 'https://image.tmdb.org/t/p/w500';

const ItemList: React.FC<ItemListProps> = ({ id, title, rating, picture }) => {
  const { Meta } = Card;

  const dispatch = useDispatch();
  const handleDetails = (id: number) => {
    dispatch(getDetailsService(id));
  };

  const formatRating = rating.toString().substring(0, 4);

  return (
    <>
      <Card
        onClick={() => handleDetails(id)}
        style={{ width: 240 }}
        cover={<img alt="Coming soon" src={`${pictureUrl}${picture}`} />}
      >
        <Meta title={title} description={formatRating} />
      </Card>
    </>
  );
};

export default ItemList;
