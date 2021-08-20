import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
                <a className="navbar-brand" href="#"><i className="fa fa-cloud"></i> Balance Web Development</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navLinks">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" id="services" role="button" data-toggle="dropdown">Services</a>
                            <div className="dropdown-menu" aria-labelledby="services">
                                <a className="dropdown-item">Design</a>
                                <a className="dropdown-item">Development</a>
                                <a className="dropdown-item">Consulting</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contact</a>
                        </li>
                    </ul>    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
