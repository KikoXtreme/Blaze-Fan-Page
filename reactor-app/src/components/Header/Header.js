import './header.css'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <h1>Blaze and the Monster Machines </h1>
            <h2>Fan Page</h2>
            <div className="header-lists">
                <ul className="header-lists-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blaze">Blaze</Link></li>
                    <li><Link to="/create">New Blaze Friends</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
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