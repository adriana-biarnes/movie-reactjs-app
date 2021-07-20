import trendingIcon from '../../media/trending-icon.svg';
import './Header.css';

const Header: React.FunctionComponent = () => {
  return (
    <div className="header-wrapper">
        <span>
          <h1 className="header-title">top trending gallery</h1>
          <img src={trendingIcon} alt="trending" className="header-icon" />
        </span>
    </div>
  );
};

export default Header;
