import React from "react";
import "../styles/home.css"; // Custom CSS file
import Layout from "../components/Layout";
import Blogs from "../components/Blogs";
import Careers from "../components/Careers";
import Developers from "../components/Developers";

const LandingPage = () => {
  return (
    <Layout>
      <div className="banner-section">
        <div className="static-banner-text">
            {/* <h1 className="banner-text">TRADEGPT</h1> */}
          <span class="word-top banner-text">TRADE</span>
          <span class="word-bottom banner-text">GPT</span> 
          
        </div>
      </div>
    

      {/* announcing */}
      <div className="announcing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ zIndex: "10" }}>
              <div className="banner_bottom">
                <div className="trade_text">
                  <h2>Announcing TradeGpt</h2>
                </div>
                <div className="learn_more">
                  <a className="text-white" href="#">Learn More</a>
                  <a className="text-white" href="https://tradegpt-chat.vercel.app/">Try Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Blogs />
      <Careers />
      <Developers />
    </Layout>
  );
};

export default LandingPage;
