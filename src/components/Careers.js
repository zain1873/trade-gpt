import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/careers.css";

const careersData = [
  {
    title: "AI Engineer & Researcher - Data",
    location: "London",
  },
  {
    title: "AI Engineer & Researcher - GPU Kernel",
    location: "London",
  },
  {
    title: "AI Engineer & Researcher - Human Data",
    location: "London",
  },
];

const Careers = () => {
  return (
    <section className="careers-section bg-black">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h2 className="section-title">Work with us to create a better future</h2>
        </div>
        <div className="col-lg-8">
        <a className="articles_link" href=""> 
          {careersData.map((job, index) => (
            <div key={index} className="career-item d-flex justify-content-between align-items-center">              
                <h5 className="job-title">{job.title}</h5>
                <p className="job-location">{job.location}</p>
              <div className="job-arrow">
                <FaArrowRight />
              </div>
            </div>
          ))}
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Careers;
