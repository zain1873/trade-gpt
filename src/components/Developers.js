import React from "react";
import "../styles/developers.css";
import card1 from "../assets/img/grok_img.jpg";
import card2 from "../assets/img/grok_img.jpg";

const Developers = () => {
  return (
    <section className="developers">
    <div className="container-fluid bg-black">
      <div className="container">
        <h2 className="section_title text-start mb-5">Developers</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6 mb-lg-0 mb-3">
            <div className="developers_card bg-dark text-white">
              <div className="card_img">
                <img src={card1} className="obj_fit" alt="Developer Docs" />
              </div>
              <div className="developers_body">
                <h5 className="card-title">Cloud Console</h5>
                <p className="card-text">
                  Prepare to integrate Grok by setting up our API.
                </p>
                <a target="_blank" href="#" className="theme_btn">
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="developers_card bg-dark text-white">
              <div className="card_img">
                <img src={card2} className="obj_fit" alt="Developer Docs" />
              </div>
              <div className="developers_body">
                <h5 className="card-title">Developer Docs</h5>
                <p className="card-text">
                  Learn more about Grok and its capabilities.
                </p>
                <a target="_blank"  href="https://docs.x.ai/docs/overview#featured-models" className="theme_btn">
                  View Docs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Developers;
