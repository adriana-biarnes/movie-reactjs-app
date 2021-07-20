import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../redux/store';
import './DetailsLayout.css';
import SimilarsList from '../SimilarsList/SimilarsList';
import backButton from '../../media/backbtn.svg';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const DetailsLayout: React.FC = () => {
  const { movieDetails } = useSelector((state: AppState) => state.movieDetails);

  return movieDetails ? (
    <div className="details-wrapper">
      <Link to="/">
        <img src={backButton} alt="Go back" className="goback-btn" />
      </Link>
      <div className="details-info">
        <p className="info-title">{movieDetails?.original_title}</p>
        <p className="info-subtitle">{movieDetails?.tagline}</p>
        <p>overview</p>
        <p className="info-text">{movieDetails?.overview}</p>
        <div className="rating-wrapper">
          <p>rating</p>
          <p className="info-text rating-num">{movieDetails?.vote_average}</p>
        </div>
      </div>
      <div className="details-info similar-list-container">
        <SimilarsList movieId={movieDetails?.id!} />
      </div>
    </div>
  ) : (
    <ErrorMessage />
  );
};

export default DetailsLayout;
