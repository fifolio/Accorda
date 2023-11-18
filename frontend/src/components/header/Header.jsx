import { FaGithub } from "react-icons/fa";
import './Header.scss';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>

            {/* LARGE SCREEN NAV */}
            <div className="d-none d-md-block">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <a href="/" className="nav-logo d-inline-flex link-body-emphasis text-decoration-none">
                            accorda
                        </a>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        {/* <li><a href="#" className="nav-link px-2">Creative Careers</a></li> */}
                        <li><Link to="/jobs" className="nav-link px-2">Browse Jobs</Link></li>
                        <li><a href="#" className="nav-link px-2">Careers</a></li>
                        <li><a href="#" className="nav-link px-2">Internships</a></li>
                        <li><a href="#" className="nav-link px-2">About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <a href="https://github.com/fifolio/accorda" target='_blank' rel="noreferrer" className="btn btn-dark git-btn"><FaGithub className="git-icon" /> Repository</a>
                    </div>
                </header>
            </div>

            {/* SMALL SCREEN NAV */}
            <div className="d-lg-none d-md-none">
                <nav className="navbar bg-white fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">accorda</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">accorda</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/jobs">Browse Jobs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Internships</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">FAQs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <div className="col-md-3">
                                        <a href="https://github.com/fifolio/accorda" target='_blank' rel="noreferrer" className="btn btn-dark git-btn"><FaGithub className="git-icon" /> Repository</a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}