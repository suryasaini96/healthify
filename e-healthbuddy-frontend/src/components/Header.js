import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                        </a>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-white">Home</a></li>
                            <Link to="/covid-tracker" className="nav-link px-2 text-white"><li>Covid-Tracker</li></Link>
                            <li><a href="#" className="nav-link px-2 text-white">Blogs</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Products</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                        </ul>
                        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                        </form> */}

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                            <button type="button" className="btn btn-warning me-2">Sign-up</button>
                        </div>

                        <div class="dropdown text-end">
                            <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
                            </a>
                            <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
