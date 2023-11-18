import { Link } from "react-router-dom";

export default function Errs() {
    return (
        <>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 mt-lg-0 mt-5 align-items-center rounded-3">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-5">Oops! 🙊</h1>
                    <p className="lead mt-5">It seems like you&apos;ve taken a detour into the unknown. Our servers searched high and low, but couldn&apos;t find the page you&apos;re looking for. No worries, though! Navigate back to the homepage and let&apos;s get you back on track. If you have a moment, feel free to explore other parts of our site. Happy browsing!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link to="/">
                            <button type="button" className="btn btn-outline-dark btn-lg px-4 fw-semibold">Return Home</button>
                        </Link>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-5 offset-lg-1 m-0 p-0 overflow-hidden">
                    <img className="rounded-lg-3" src="error.jpg" width="500" />
                </div>
            </div>
        </>
    )
}