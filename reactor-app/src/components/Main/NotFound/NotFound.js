import { Link } from "react-router-dom";
import './notFound.css';

export const NotFound = () => {
    return (
        <div className="notFound">
            <p className="notFound-title">404 - Page Not Found!</p>
            <p className="notFound-link"><Link to='/'>Home Page</Link></p>
        </div>
    );
}