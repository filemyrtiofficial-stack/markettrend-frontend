import React from "react";
import "./Style/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Search */}
      <div className="search-boxs">
        <input type="text" placeholder="Quote Lookup" />
      </div>

      {/* Market Summary */}
      
      <div className="market-summary">
  {/* Tabs */}
  <ul className="country-tabs">
    <li className="active">US</li>
    <li>Europe</li>
    <li>Asia</li>
    <li>Cryptocurrencies</li>
    <li>Rates</li>
  </ul>

  {/* Cards */}
  <div className="market-grid">
    <div className="market-card">
      <h4>S&P Future</h4>
      <p className="value">2,410.90</p>
      <p className="loss">-12.20 (-0.50%)</p>
    </div>

    <div className="market-card">
      <h4>VIX</h4>
      <p className="value">14.68</p>
      <p className="loss">-0.03 (-0.20%)</p>
    </div>

    <div className="market-card">
      <h4>Gold</h4>
      <p className="value">3,679.70</p>
      <p className="gain">+6.10 (+0.17%)</p>
    </div>
    <div className="market-card">
      <h4>Gold</h4>
      <p className="value">3,679.70</p>
      <p className="gain">+6.10 (+0.17%)</p>
    </div>
    <div className="market-card">
      <h4>Gold</h4>
      <p className="value">3,679.70</p>
      <p className="gain">+6.10 (+0.17%)</p>
    </div>
    <div className="market-card">
      <h4>Gold</h4>
      <p className="value">3,679.70</p>
      <p className="gain">+6.10 (+0.17%)</p>
    </div>
  </div>
</div>




      {/* Portfolio */}
      <div className="portfolio-box">
        <h3>Portfolio</h3>
        <p>Sign in to access your portfolio</p>
        <button className="signin-btn">Sign in</button>
      </div>

      {/* Top Gainers */}
      <div className="top-gainers">
        <h3>Top gainers</h3>
        <ul>
          <li>
            <span>OPEN</span>
            <span className="gain">+4.66 (+79.52%)</span>
          </li>
          <li>
            <span>WBD</span>
            <span className="gain">+3.63 (+28.95%)</span>
          </li>
          <li>
            <span>CRCL</span>
            <span className="gain">+20.01 (+17.60%)</span>
          </li>
          <li>
            <span>MENS</span>
            <span className="gain">+9.20 (+16.60%)</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
