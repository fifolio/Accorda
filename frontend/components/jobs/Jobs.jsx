import './Jobs.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Countdown from '../countdown/Countdown';

export default function Jobs() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/jobs`);
        setData(response.data.data)
        response.data.data ? setLoading(false) : setLoading(true);

      } catch (error) {
        console.error('something went wrong while fetching: ', error);
        setLoading(false)
      }
    }

    fetchData();
  }, [apiUrl]);


  return (
    <>
      <div className="mt-5 d-lg-none d-md-none"><br /></div>
      <div className="mt-sm-5 row p-4 p-md-5 mb-4 rounded text-body-emphasis overflow-hidden">
        <div className="col-lg-7 px-0">
          <h1 className="display-5 fst-italic fw-semibold">Embark on a Journey of Opportunities</h1>
          <p className="lead my-3">Explore our curated list of available jobs and unlock the door to your next career adventure! Your dream job might be just a click away. Dive into a sea of possibilities and discover the perfect match for your skills. The future awaits—start your job search now!</p>
          {/* <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Continue reading...</a></p> */}
        </div>
        <div className="col-lg-5 text-end px-0 d-none d-lg-block" style={{'margin-top': '-55px'}}>
          <img src="https://uploads-ssl.webflow.com/6165bde105fa8d424d14e3e4/6286670d707a7523243fde26_WOWProductMockup.png" width="550px"/>
        </div>
      </div>

      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">
          <a className="nav-item nav-link link-body-emphasis active" href="#">All Jobs</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Software Development</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">UX/UI Design</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Data Science</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Marketing</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Finance</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Management</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Engineering</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Healthcare</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Fashion</a>
        </nav>
      </div>

      <div className="row mb-2">

        <center className={`my-5 ${loading ? '' : 'd-none'}`} >
          <div className="spinner-border text-primary" role="status">
            {/* <span className="visually-hidden">Loading...</span> */}
          </div>

          <Countdown />
        </center>

        {
          data?.map((job) => (
            <div className="col-md-6" key={job.id}>
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-hover h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static text-capitalize">
                  <strong className="d-inline-block mb-0 text-primary-emphasis">{job.attributes.company}</strong>
                  <p className="d-inline-block mb-0 text-primary-emphasis">Location: {job.attributes.location}</p>
                  <h3 className="my-2">{job.attributes.title}</h3>
                  <div className="mb-1 text-body-secondary">Salary: ${job.attributes.salary} | {job.attributes.education} | {job.attributes.experience}</div>
                  <p className="card-text mb-3 overflow-hidden" style={{'height': '100px'}}>{job.attributes.desc}</p>
                  {/* <hr /> */}
                  <a href={`mailto:${job.attributes.email}`} className="icon-link gap-1 icon-link-hover stretched-link text-lowercase">
                    {job.attributes.email}
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>


    </>
  )
}