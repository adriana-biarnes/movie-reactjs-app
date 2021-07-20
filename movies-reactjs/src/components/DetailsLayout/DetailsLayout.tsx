import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import './DetailsLayout.css';
import { Link } from "react-router-dom";
import backButton from '../../media/backbtn.svg';
import SimilarsList from "../SimilarsList/SimilarsList";

const DetailsLayout: React.FC = () => {
    const {movieDetails} = useSelector((state: AppState) => state.movieDetails);

    return (
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
                <SimilarsList movieId={movieDetails?.id!}/>
            </div>
        </div>
  );
};

export default DetailsLayout;
