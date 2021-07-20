import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsService } from "../../redux/effects/DetailsService";
import { getMoviesShowsListService } from "../../redux/effects/MoviesService";
import { AppState } from "../../redux/store";
import './DetailsLayout.css';
import starIcon from '../../media/star-regular.svg'

const DetailsLayout: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getDetailsService(379686));
    }, [dispatch]);

    const { movieDetails } = useSelector(
        (state: AppState) => state.movieDetails
    );

    console.log('movieDetails', movieDetails);

    return (
        <div className="details-wrapper">
            <div className="details-info">
                    <p className="info-title">Space Jam</p>
                    <p>overview</p>
                    <p className="info-text">When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.</p>
                <div className="visual-details">
                    <span className="rating-container">
                        <img src={starIcon} alt="rating" className="star-icon"/>
                        <p>6.2</p>
                    </span>
                    <img src="https://image.tmdb.org/t/p/w500/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg" />
                </div>
            </div>
        </div>
  );
};

export default DetailsLayout;
