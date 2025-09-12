import React from "react";
import FeaturedNews from "../components/FeaturedNews";
import TopArticles from "../components/TopArticles";
import LatestNews from "../components/LatestNews";
import "./Style/NewsLayout.css";

export default function NewsLayout() {
  return (
    <div className="news-container">
      <FeaturedNews />
      <TopArticles />
      <LatestNews />
    </div>
  );
}
