import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 mt-lg-0 mt-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Unlock Your Career Potentials with Accorda</h1>
                    <p className="lead">Welcome to Accorda – your catalyst for career success. Explore diverse opportunities, connect with top companies, and elevate your professional path. Join Accorda today and let&apos;s shape your future together.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link to="/post">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Post a Job</button>
                        </Link>
                        <Link to="/jobs">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 fw-semibold">Browse Jobs</button>
                        </Link>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-5 offset-lg-1 m-0 p-0 overflow-hidden">
                    <img className="rounded-lg-3" src="hero.png" width="750" />
                </div>
            </div>
        </>
    )
}