import React from 'react';
import icon1 from '../img/icon-1.png';

const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <h2 className="m-0 text-primary">
                        <img className="img-fluid me-2" src={icon1} alt="" style={{width: '45px'}} />
                        CryptoCoin
                    </h2>
                </a>
                <button type="button" className="navbar-toggler"
                        data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-4 py-lg-0">
                        <a href="#" className="nav-item nav-link active">Home</a>
                        <a href="#" className="nav-item nav-link">About</a>
                        <a href="#" className="nav-item nav-link">Service</a>
                        <a href="#" className="nav-item nav-link">Roadmap</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle"
                               data-bs-toggle="dropdown">Pages
                            </a>
                            <div className="dropdown-menu shadow-sm m-0">
                                <a href="#" className="dropdown-item">Feature</a>
                                <a href="#" className="dropdown-item">Token Sale</a>
                                <a href="#" className="dropdown-item">FAQs</a>
                                <a href="#" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="#" className="nav-item nav-link">Contact</a>
                    </div>
                    <div className="h-100 d-lg-inline-flex align-items-center d-none">
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-0" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};
export {NavBar};