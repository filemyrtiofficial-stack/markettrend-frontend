// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTimes } from "react-icons/fa";
import "./Style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Logo + Social */}
        <div className="footer-section">
          <h2 className="footer-logo">
            <span className="logo-main">World</span>
            <span className="logo-sub">MarketTrend</span>
          </h2>
          <p className="footer-copy">
            Copyright © 2025 WorldMarketTrend. <br /> All rights reserved.
          </p>
          <div className="footer-social">
            <FaTimes className="icon" />
            <FaFacebook className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>

        {/* What's Trending */}
        <div className="footer-section">
          <h3 className="footer-title">What's trending</h3>
          <ul>
            <li><Link to="/coming">Dow Jones</Link></li>
            <li><Link to="/coming">S&amp;P 500</Link></li>
            <li><Link to="/coming">DAX Index</Link></li>
            <li><Link to="/coming">Nvidia</Link></li>
            <li><Link to="/coming">Tesla</Link></li>
            <li><Link to="/coming">DJT</Link></li>
            <li><Link to="/coming">Tariffs</Link></li>
          </ul>
        </div>

        {/* Explore More */}
        <div className="footer-section">
          <h3 className="footer-title">Explore more</h3>
          <ul>
            <li><Link to="/coming">Mortgages</Link></li>
            <li><Link to="/coming">Credit Cards</Link></li>
            <li><Link to="/coming">Sectors</Link></li>
            <li><Link to="/coming">Crypto Heatmap</Link></li>
            <li><Link to="/coming">Financial News</Link></li>
          </ul>
        </div>

        {/* About */}
        <div className="footer-section">
          <h3 className="footer-title">About</h3>
          <ul>
            <li><Link to="/coming">Data Disclaimer</Link></li>
            <li><Link to="/coming">Help</Link></li>
            <li><Link to="/coming">Feedback</Link></li>
            <li><Link to="/coming">Sitemap</Link></li>
            <li><Link to="/coming">Licensing</Link></li>
            <li><Link to="/coming">What's New</Link></li>
            <li><Link to="/coming">About Our Ads</Link></li>
            <li><Link to="/coming">Terms and Privacy Policy</Link></li>
            <li><Link to="/coming">Privacy Dashboard</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
