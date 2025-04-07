import React from "react";
import grokImg from "../assets/img/trade_gpt_img.jpg";
// import { section } from "framer-motion/client";


const blogsData = [
  {
    date: "February 19, 2025",
    title: "Grok 3 Beta — The Age of Reasoning Agents",
    description:
      "We are thrilled to unveil an early preview of Grok 3, our most advanced model yet, blending superior reasoning with extensive pretraining knowledge.",
    image: grokImg ,
  },
  {
    date: "December 23, 2024",
    title: "xAI raises $6B Series C",
    description:
      "We are partnering with A16Z, Blackrock, Fidelity Management & Research Company, and others to further our advancements in AI research.",
      image: grokImg ,
  },
  {
    date: "November 10, 2024",
    title: "TradeGPT Revolution in AI Trading",
    description:
      "TradeGPT is setting new benchmarks in AI-driven trading strategies. Discover how our AI models are optimizing financial decisions.",
      image: grokImg ,
  },
];

function Blogs() {
    return (
      <div className="container-fluid bg-black p-lg-5 p-md-4"> 
        <div className="container pt-5">
          <h2 className="blogs-heading text-start section_title">
            Read about our latest announcement.
          </h2>
  
          <div className="row"> 
            {blogsData.map((blog, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
               <a className="card_link" href="">
               <div className="blog-card p-3">
                  <div className="blog-image">
                    <img src={blog.image} alt={blog.title} className="img-fluid rounded obj_fit" />
                  </div>
                  <div className="card_blogs_desc">
                  <span className="blog-date text-muted">{blog.date}</span>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-description">{blog.description}</p>
                  </div>
                </div>
               </a>
              </div>
            ))}
          </div>
          <div className="btn">
            <button className="theme_btn">View all articles</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Blogs;
  

