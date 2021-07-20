import './Header.css';
import trendingIcon from '../../media/trending-icon.svg';

import detailsIcon from '../../media/infoicon.svg';

const Header: React.FunctionComponent = () => {
    let path = window.location.pathname
    
    return (
        <div className="header-wrapper">
            {path === '/'
                ? (
                <>
                    <h1 className="header-title">top trending gallery</h1>
                    <img src={trendingIcon} alt="trending" className="header-icon"/>
                </>
                ) 
                : (
                <>
                    <h1 className="header-title">details</h1>
                    <img src={detailsIcon} alt="trending" className="header-icon info-icon"/>
                </>
                )                

            }
        </div>
    );
}
 
export default Header;