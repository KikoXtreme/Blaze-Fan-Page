import { Link } from "react-router-dom";
import './notFound.css';

export const NotFound = () => {
    return (
        <div className="notFound">
            <p className="notFound-paragraph">
                <Link className="notFound-link" to='/'><i className="fa-solid fa-house"></i> <b>Home Page</b></Link>
            </p>
        </div>
    );
}