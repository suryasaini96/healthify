import React, {useContext} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from './UserContext';

const Navbar = () => {
    
    const {user, setUser} = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();

    const logoutHandler = (e) => {
        setUser(null);
        history.push('/');
    }

    const homepageHandler = () => {
        if (user == null)
            return '/';
        else {
            // If doctor goto doctor's homepage
            if (user.speciality != null) 
                return '/doctor';
            else  
                return '/patient';
        }
    }

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-md navbar-dark ${location.pathname=='/'? 'bg-transparent': 'bg-dark'}`} aria-label="Navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand" ><span><i class="fa fa-h-square me-2" aria-hidden="true"/>Healthify</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <Link to={homepageHandler} className="nav-link px-2 text-white"><li>Home</li></Link>
                            <Link to="/covid-tracker" className="nav-link px-2 text-white"><li>Covid-Tracker</li></Link>
                            <Link to="/about" className="nav-link px-2 text-white"><li>About</li></Link>
                        </ul>

                        {
                            user ? (<div class="dropdown text-end">
                                        <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa fa-user text-white fs-5 ms-2" />
                                        </a>
                                        <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                            <li><a class="dropdown-item" href="#">Profile</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="#" role="button" onClick={logoutHandler}>Sign out</a></li>
                                        </ul>
                                    </div>)
                                :
                                (<div className="text-end">
                                    <Link to="/login"><button type="button" className="btn btn-outline-light me-2">Login</button></Link>
                                    <Link to="/register"><button type="button" className="btn btn-warning me-2">Sign-up</button></Link>
                                </div>)
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
