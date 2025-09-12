import React from "react";
import "./Style/NewsLayout.css";

export default function LatestNews() {
  return (
    <div className="latest-section">
      <h3>Latest</h3>
      <ul>
        <li>EU aluminium producers push for 30% scrap export levy · Reuters · 22m ago</li>
        <li>US authorities release new video of suspect in Charlie Kirk assassination · Financial Times · 30m ago</li>
        <li>India sees no major impact on Foxconn from pullback of Chinese employees · Reuters · 39m ago</li>
        <li>EU accepts Microsoft commitment to address Teams competition concerns · Reuters · 52m ago</li>
        <li>BofA Says Investors Back Fed’s Credibility With Rate-Cut Timing · Reuters · 1h ago</li>
      </ul>
    </div>
  );
}
