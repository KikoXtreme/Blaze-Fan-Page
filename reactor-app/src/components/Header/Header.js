import './header.css'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <h1>Reactor - Blaze Fan Page</h1>
            <div className="header-lists">
                <ul className="header-lists-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>All Blze Frineds</li>
                    <li>New Blaze Friends</li>
                    <li>Contacts</li>
                </ul>
                <ul className="header-lists-list">
                    <li><Link to="/users/register">Register</Link></li>
                    <li><Link to="/users/login">Login</Link></li>
                    <li><Link to="/users/logout">Logout</Link></li>
                    <li><Link to="/users/profile">Profile</Link></li>
                </ul>
            </div>
        </header>
    );
}