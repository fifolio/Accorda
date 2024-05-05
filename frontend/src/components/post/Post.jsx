import {ID} from 'appwrite';
import { appwriteConfig, databases } from "../../../appwrite/config";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import Countdown from "../countdown/Countdown";


export default function Post() {
    
    const [loadingSubmit, setLoadingSubmit] = useState(true)
    
    // useEffect(() => {
    //     // setLoadingSubmit(true)
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`${apiUrl}/jobs`);
    //             if(response.status === 200) {
    //                 console.log('response true');
    //                 setLoadingSubmit(false)
    //             } else {
    //                 console.log('response false');
    //                 setLoadingSubmit(true)
    //             }

    //         } catch (error) {
    //             console.error('something went wrong while fetching: ', error);
    //             setLoadingSubmit(false)
    //         }
    //     }

    //     fetchData();
    // }, [apiUrl]);

    // Create a ref for the button
    const buttonRef = useRef();

    const [loading, setLoading] = useState(false);
    const [jobFormData, setJobFormData] = useState({
        title: '',
        desc: '',
        company: '',
        skills: '',
        location: '',
        salary: '',
        type: '',
        education: '',
        experience: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setJobFormData({
            ...jobFormData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await databases.createDocument(
                appwriteConfig.database, // databaseId
                appwriteConfig.collection, // collectionId
                ID.unique(), // documentId
                {
                    company: jobFormData.company,
                    title: jobFormData.title,
                    desc: jobFormData.desc,
                    skills: jobFormData.skills,
                    location: jobFormData.location,
                    salary: jobFormData.salary,
                    type: jobFormData.type,
                    education: jobFormData.education,
                    experience: jobFormData.experience,
                    email: jobFormData.email
                }
            );
            setLoading(false);
            console.log('Job posted', res.data);
            buttonRef.current.click();
            setJobFormData({
                title: '',
                desc: '',
                company: '',
                skills: '',
                location: '',
                salary: '',
                type: '',
                education: '',
                experience: '',
                email: ''
            });
        } catch (error) {
            setLoading(false);
            console.error('Something went wrong:', error);
        }
    }
    

    return (
        <>
            <Link to="/" className="btn btn-danger fw-bold shadow-lg">&larr; Back</Link>

            <div className="py-4 text-center">
                <img className="d-block mx-auto mb-4" src="logo.png" width="72" height="57" />
                <h2 className="fw-bold">Connect with Top Talent – Post Your Job Today!</h2>
                <p className="lead">Welcome to our job board – the perfect platform to showcase your opportunities and connect with skilled professionals! Posting a job is your gateway to attracting top talent and building the team your company deserves.</p>
            </div>

            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Why Post with Us?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    <strong>Discover the Benefits of Posting with Us! 🚀</strong> Posting your job on our platform opens up a world of opportunities. From a diverse pool of talented candidates to streamlined processes, we&apos;ve got you covered. Explore the advantages and make an informed decision for your hiring needs.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    How It Works
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <strong>Navigating the Job Posting Process Made Simple! 🤝</strong> Wondering how to post a job and what happens next? We&apos;ve broken down the process into easy steps. Learn about our straightforward submission form, the review process, and how your job listing gets visibility. Get started with confidence!
                                </div>
                            </div>
                        </div>
                        {/* <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Terms of Use
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <strong>Understanding Our Platform's Terms and Conditions 📜</strong> Before you post your job, it's important to be familiar with our terms of use. This section outlines the guidelines and expectations for using our platform. We believe in transparency and want to ensure a positive experience for both employers and job seekers. Take a moment to review our terms before submitting your job listing.
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="col-md-7 col-lg-8 mb-5">
                    <h4 className="mb-3 fw-bold">Hire with Accorda Now</h4>
                    <form onSubmit={handleSubmit} className="needs-validation">

                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">Company Name</label>
                                <input onChange={handleInputChange} name="company" value={jobFormData.company} type="text" className="form-control" placeholder="ex. Apple, Meta, Google ..." required />
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Job Title</label>
                                <input onChange={handleInputChange} name="title" value={jobFormData.title} type="text" className="form-control" placeholder="ex. Software Engineer, Accounter, UI/UX ..." required={true} />

                            </div>

                            <div className="col-12">
                                <label htmlFor="lastName" className="form-label">Job Description</label>
                                <textarea onChange={handleInputChange} name="desc" value={jobFormData.desc} className="form-control" rows="3" placeholder="Including job responsibilities and requirements ..." required={true}></textarea>

                            </div>

                            <div className="col-12">
                                <label htmlFor="lastName" className="form-label">Skills Required</label>
                                <input onChange={handleInputChange} name="skills" value={jobFormData.skills} type="text" className="form-control" placeholder="ex. Coding, Filming, ..." required={true} />

                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Job Location</label>
                                <input onChange={handleInputChange} name="location" value={jobFormData.location} type="text" className="form-control" id="address" placeholder="ex. 1234 Main St" required={true} />

                            </div>

                            <div className="col-12">
                                <label htmlFor="lastName" className="form-label">Monthly Salary</label>
                                <input onChange={handleInputChange} name="salary" value={jobFormData.salary} type="number" className="form-control" id="lastName" placeholder="ex. $4250" required={true} />

                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">Job Type</label>
                                <select onChange={handleInputChange} name="type" value={jobFormData.type} className="form-select" id="country" required={true}>
                                    <option value="">Choose...</option>
                                    <option value="Remote">Remote</option>
                                    <option value="On-Site">On-Site</option>
                                    <option value="Mixed">Mixed</option>
                                </select>

                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">Education Requirements</label>
                                <select onChange={handleInputChange} name="education" value={jobFormData.education} className="form-select" id="state" required={true}>
                                    <option value="">Choose...</option>
                                    <option value="High School">High School</option>
                                    <option value="Bachelor Degree">Bachelor Degree</option>
                                    <option value="Master Degree">Master Degree</option>
                                    <option value="PhD Degree or Above">PhD Degree or Above</option>
                                </select>

                            </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label">Experience Level</label>
                                <select onChange={handleInputChange} name="experience" value={jobFormData.experience} className="form-select" id="state" required={true}>
                                    <option value="">Choose...</option>
                                    <option value="Entry-level">Entry-level</option>
                                    <option value="Mid-level">Mid-level</option>
                                    <option value="Senior">Senior</option>
                                </select>

                            </div>
                        </div>

                        <div className="col-sm-12 mt-3">
                            <label htmlFor="firstName" className="form-label">Company Email</label>
                            <input onChange={handleInputChange} name="email" value={jobFormData.email} type="text" className="form-control" placeholder="ex. youremail@company.com" required />
                        </div>

                        {/* <hr className="my-4" /> */}

                        <div className="col-12 my-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                                <label className="form-check-label fw-bold" htmlFor="invalidCheck">
                                    Agree to <a href="#">terms and conditions</a>
                                </label>

                            </div>
                        </div>

                        {/* <hr className="my-4" /> */}
                        <div className={`alert alert-warning ${loadingSubmit ? '' : 'd-none'}`} role="alert">
                            <Countdown />
                        </div>

                        <button className={`w-100 btn btn-primary btn-lg fw-bold ${loadingSubmit ? 'disabled' : ''}`} type="submit">

                            <span className={`${loading ? 'd-none' : ''}`}>
                                Post Your Job
                            </span>

                            <div className={`spinner-border text-light mt-1 ${loading ? '' : 'd-none'}`} style={{ 'height': '21px', 'width': '21px' }} role="status"></div>
                        </button>

                    </form>

                </div>
            </div>


            {/* <!-- Button trigger modal --> */}
            <button ref={buttonRef} id="SubmittedCorrect" type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <h5 className="fw-bold my-4">Thank you for posting your job!</h5>
                            <p >
                                Your information has been received successfully. Feel free to explore more open jobs on Accorda. Thank you for considering us as your potential employer
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary fw-semibold" data-bs-dismiss="modal">Post New Job</button>
                            <a href="/jobs">
                                <button type="button" className="btn btn-success fw-bold">Explore Open Jobs</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
