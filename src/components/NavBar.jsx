import Logo from './Logo';
import '../styles/css/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <Logo />
            <div className="links">
                <a href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">Blog</a>
                <a href="/">Contact</a>
            </div>
            <div className="total-value-and-purchases">
                <h3>$239,00</h3>
                <div className="notifications-container">
                    {/* purchases icon */}
                    <img
                        src="#"
                        alt="purchases"
                    />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;