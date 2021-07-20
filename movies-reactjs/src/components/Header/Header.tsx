import './Header.css';
export interface HeaderProps {
    
}


const Header: React.FunctionComponent<HeaderProps> = () => {
    let path = window.location.pathname
    
    return (

        <div className="header-wrapper">
            {path === '/' 
                ? <h1 className="header-title">top trending list</h1>
                : <h1 className="header-title">details</h1>
            }
            
        </div>
    );
}
 
export default Header;