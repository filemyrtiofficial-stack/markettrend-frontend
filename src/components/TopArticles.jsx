import React from "react";
import featureImg from "../assets/2.webp";

import "./Style/TopArticles.css";

export default function TopArticles() {
  return (
    <div className="top-articles">
      <div className="article-card">
        <img 
          src={featureImg} 
          alt="Features" 
          className="featured-img" 
        />
        <h4>Trump's tariff revenue just hit another monthly record</h4>
        <p>Yahoo Finance · 3h ago</p>
      </div>

      <div className="article-card">
        <h4>Paramount-Warner deal would face regulatory, financing hurdles</h4>
        <p>Bloomberg · 20s ago</p>
      </div>

      <div className="article-card">
        <h4>SK Hynix stock hits record after memory chip milestone</h4>
        <p>Reuters · 1h ago</p>
      </div>

      <div className="article-card">
        <h4>China caught in policy dilemma as Fed rate cut looms</h4>
        <p>Reuters · 4h ago</p>
      </div>
    </div>
  );
}
