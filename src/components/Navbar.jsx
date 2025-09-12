import { Link, useNavigate } from "react-router-dom";
import "./Style/Navbar.css";

export default function Navbar() {
  const nav = useNavigate();

  function onSearch(e) {
    if (e.key === "Enter") {
      const q = e.target.value.trim();
      if (q) nav("/search?q=" + encodeURIComponent(q));
    }
  }

  return (
    <nav className="navbar">
      {/* First Row */}
      <div className="navbar-inner container">
        {/* Left: Logo */}
        <div className="brand">
          <Link to="/">
            <img
              src="/logo.png"
              alt="logo"
              className="logo-img"
              onError={(e) => (e.target.style.display = "none")}
            />
            <span className="brand-text">FinanceApp</span>
          </Link>
        </div>

        {/* Center: Search */}
        <div className="search-box">
          <input
            className="search-input"
            placeholder="Search for news, tickers or companies"
            onKeyDown={onSearch}
          />
          <button className="search-btn">🔍</button>
        </div>

        {/* Center-right: Links */}
        <ul className="nav-links">
          <li><Link to="/news">News</Link></li>
          <li><Link to="/finance">Finance</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/more">More ▾</Link></li>
        </ul>

        {/* Right: Icons / Buttons */}
        <div className="nav-actions">
          <button className="icon-btn">🔔</button>
          <Link to="/mail" className="mail-btn">📩 Mail</Link>
          <Link to="/signin" className="signin-btn">Sign in</Link>
        </div>
      </div>

      {/* Second Row */}
      <div className="navbar-2inner container">
        <ul className="nav-links-2">
          <li><Link to="/portfolio">My Portfolio</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/markets">Markets</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/personal-finance">Personal Finance</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/watch">Watch Now</Link></li>
        </ul>
      </div>
    </nav>
  );
}
