import './Header.css';
export interface HeaderProps {
    
}
 
const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <div className="header-wrapper">
            <h1 className="header-title">TOP TRENDING LIST</h1>
        </div>
    );
}
 
export default Header;