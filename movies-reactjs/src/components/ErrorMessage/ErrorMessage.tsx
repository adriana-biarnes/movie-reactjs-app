import './ErrorMessage.css';
import backButton from '../../media/backbtn.svg';
import { Link } from 'react-router-dom';

const ErrorMessage = () => (
  <div>
    <p className="alert error">
      Go to the gallery to pick another movie or TV show!
    </p>
    <div className="arrow-container">
        <Link to="/">
        <img src={backButton} alt="Go back" className="goback-btn error" />
        </Link>
    </div>
  </div>
);

export default ErrorMessage;
