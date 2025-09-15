import { Link, useNavigate } from "react-router-dom";
import "./Style/Navbar.css";

export default function Navbar() {
  const nav = useNavigate();

  function onSearch(e) {
    if (e.key === "Enter") {
      const q = e.target.value.trim();
      if (q) nav("/coming-soon?q=" + encodeURIComponent(q));
    }
  }

  return (
    <nav className="navbar">
      {/* First Row */}
      <div className="navbar-inner container">
        {/* Left: Logo */}
        <div className="brand">
          <Link to="/coming-soon">
            <img
              src="/logo.png"
              alt="logo"
              className="logo-img"
              onError={(e) => (e.target.style.display = "none")}
            />
            <span className="brand-text">WorldMarketTrends</span>
          </Link>
        </div>

        {/* Center: Search */}
        <div className="search-box">
          <input
            className="search-input"
            placeholder="Search for news, tickers or companies"
            onKeyDown={onSearch}
          />
          <button
            className="search-btn"
            onClick={() => nav("/coming-soon")}
          >
            🔍
          </button>
        </div>

        {/* Center-right: Links */}
        <ul className="nav-links">
          <li><Link to="/coming-soon">News</Link></li>
          <li><Link to="/coming-soon">Finance</Link></li>
          <li><Link to="/coming-soon">Sports</Link></li>
          <li className="dropdown">
            <span className="dropdown-toggle">More ▾</span>
            <div className="dropdown-menu">
              <div className="dropdown-col">
                <h4>News</h4>
                <Link to="/coming-soon">Today's News</Link>
                <Link to="/coming-soon">US</Link>
                <Link to="/coming-soon">Politics</Link>
                <Link to="/coming-soon">World</Link>
                <Link to="/coming-soon">Weather</Link>
                <Link to="/coming-soon">Climate Change</Link>
                <Link to="/coming-soon">Health</Link>
                <Link to="/coming-soon">Science</Link>
                <Link to="/coming-soon">Original</Link>
                <Link to="/coming-soon">Newsletters</Link>
                <Link to="/coming-soon">Game</Link>
              </div>

              <div className="dropdown-col">
                <h4>Life</h4>
                <Link to="/coming-soon">Health</Link>
                <Link to="/coming-soon">Travel</Link>
                <Link to="/coming-soon">Food</Link>
                <Link to="/coming-soon">Parenting</Link>
                <Link to="/coming-soon">Style and Beauty</Link>
                <Link to="/coming-soon">Horoscopes</Link>
                <Link to="/coming-soon">Shopping</Link>
                <Link to="/coming-soon">Autos</Link>
                <Link to="/coming-soon">Buying Guide</Link>
              </div>

              <div className="dropdown-col">
                <h4>Entertainment</h4>
                <Link to="/coming-soon">Celebrity</Link>
                <Link to="/coming-soon">TV</Link>
                <Link to="/coming-soon">Music</Link>
                <Link to="/coming-soon">How to Watch</Link>
                <Link to="/coming-soon">Interviews</Link>
                <Link to="/coming-soon">Videos</Link>
              </div>

              <div className="dropdown-col">
                <h4>Finance</h4>
                <Link to="/coming-soon">My Portfolio</Link>
                <Link to="/coming-soon">Watchlists</Link>
                <Link to="/coming-soon">Markets</Link>
                <Link to="/coming-soon">News</Link>
                <Link to="/coming-soon">Videos</Link>
                <Link to="/coming-soon">Screeners</Link>
                <Link to="/coming-soon">Personal Finance</Link>
                <Link to="/coming-soon">Crypto</Link>
                <Link to="/coming-soon">Sectors</Link>
              </div>

              <div className="dropdown-col">
                <h4>Sports</h4>
                <Link to="/coming-soon">Fantasy</Link>
                <Link to="/coming-soon">NFL</Link>
                <Link to="/coming-soon">NBA</Link>
                <Link to="/coming-soon">MLB</Link>
                <Link to="/coming-soon">NHL</Link>
                <Link to="/coming-soon">College Football</Link>
                <Link to="/coming-soon">College Basketball</Link>
                <Link to="/coming-soon">Soccer</Link>
                <Link to="/coming-soon">NFL Draft</Link>
                <Link to="/coming-soon">Yahoo Sports AM</Link>
              </div>

              <div className="dropdown-col">
                <h4>New on World Trends</h4>
                <Link to="/ComingSoon">Creators</Link>
                <Link to="/coming-soon">Tech</Link>
                <Link to="/coming-soon">Local Services</Link>
                <Link to="/coming-soon">Selected Edition</Link>
                <Link to="/coming-soon">US English</Link>
              </div>
            </div>
          </li>
        </ul>

        {/* Right: Icons / Buttons */}
        <div className="nav-actions">
          <button className="icon-btn">🔔</button>
          <Link to="/coming-soon" className="mail-btn">📩 Mail</Link>
          <Link to="/coming-soon" className="signin-btn">Sign in</Link>
        </div>
      </div>

      {/* Second Row */}
      <div className="navbar-2inner container">
        <ul className="nav-links-2">
          <li><Link to="/coming-soon">My Portfolio</Link></li>
          <li><Link to="/coming-soon">News</Link></li>
          <li><Link to="/coming-soon">Markets</Link></li>
          <li><Link to="/coming-soon">Research</Link></li>
          <li><Link to="/coming-soon">Personal Finance</Link></li>
          <li><Link to="/coming-soon">Videos</Link></li>
          <li><Link to="/coming-soon">Watch Now</Link></li>
        </ul>
      </div>
    </nav>
  );
}
