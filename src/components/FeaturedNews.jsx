import React from "react";
import featureImg from "../assets/1.webp";
import "./Style/FeatuerNews.css";

export default function FeaturedNews() {
  return (
    <div className="news-left">
      
<img 
  src={featureImg} 
  alt="Features" 
  className="featured-img" 
/>
      <h2 className="news-title">
        China warns Mexico to 'think twice' about tariff hikes
      </h2>
      <p className="news-desc">
        A 50% hike would be seen as appeasement to the US and unilateral
        'bullying', Beijing said.
      </p>
      <p className="news-source">Bloomberg · 5h ago · HG=F +0.50%</p>
    </div>
  );
}
