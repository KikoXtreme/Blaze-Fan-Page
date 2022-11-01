import { Link } from "react-router-dom";
import './notFound.css';

export const NotFound = () => {
    return (
        <div className="notFound">
            <p className="notFound-paragraph">
                <Link className="notFound-link" to='/'>Let's Blaze to... <b>Home Page</b></Link>
            </p>
        </div>
    );
}