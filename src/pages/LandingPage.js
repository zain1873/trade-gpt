import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/home.css"; // Custom CSS file
import Layout from "../components/Layout";
import Blogs from "../components/Blogs";
import Careers from "../components/Careers";
import Developers from "../components/Developers";

const text = "TRADE".split("");

const LandingPage = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cx = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cy = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
    }
  }, [cursor]);

  return (
    <Layout>
      <div className="banner-section">
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          viewBox="0 0 800 300"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        >
          <defs>
            <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
              {hovered && (
                   <>
                   <stop offset="0%" stopColor="rgb(209, 45, 209)" /> 
                  <stop offset="30%" stopColor="rgb(33, 85, 190)" />  
                  <stop offset="50%" stopColor="rgb(34, 183, 15)" />  
                  <stop offset="75%" stopColor="rgb(205, 205, 14)" /> 
                  <stop offset="100%" stopColor="rgb(28, 180, 174)" />  
                 </>
              )}
            </linearGradient>

            <motion.radialGradient
              id="hoverMask"
              gradientUnits="userSpaceOnUse"
              r="20%"
              animate={maskPosition}
              transition={{ duration: 0.2 }}
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </motion.radialGradient>

            <mask id="textMask">
              <rect width="100%" height="100%" fill="url(#hoverMask)" />
            </mask>
          </defs>

          {/* Outlined Text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="banner-text"
          >
            {text}
          </text>

          {/* Gradient Fill with Mask Effect */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="banner-text gradient-fill"
            stroke="url(#textGradient)"
            strokeWidth="3"
            mask="url(#textMask)"
          >
            {text}
          </text>
        </svg>
      </div>

      {/* announcing */}
      <div className="announcing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{zIndex:"10"}}>
              <div className="banner_bottom">
              <div className="trade_text">
                <h2>Announcing TradeGpt</h2>
              </div>
              <div className="learn_more">
                <a className="text-white" href="#">Learn More</a>
                <a className="text-white" href="#">Try Now</a>
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
