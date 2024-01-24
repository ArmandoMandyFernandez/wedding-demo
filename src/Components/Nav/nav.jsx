import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <div>LOGO HERE (optional)</div>
            <div>
                <h1>Names</h1> <h3>Date + Location</h3>
            </div>
            <div>
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <Link to="/" className="nav__list-item-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/ourstory" className="nav__list-item-link">
                            Our Story
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link
                            to="/weddingparty"
                            className="nav__list-item-link"
                        >
                            Wedding Party
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/travel" className="nav__list-item-link">
                            Travel
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/thingstodo" className="nav__list-item-link">
                            Things To Do
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/schedule" className="nav__list-item-link">
                            Schedule
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/registry" className="nav__list-item-link">
                            Registry
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link to="/rsvp" className="nav__list-item-link">
                            RSVP
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Nav;
