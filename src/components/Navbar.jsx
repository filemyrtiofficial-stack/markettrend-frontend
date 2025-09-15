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
          <button className="search-btn">🔍</button>
        </div>

        {/* Center-right: Links */}
        <ul className="nav-links">
          <li><Link to="/news">News</Link></li>
          <li><Link to="/finance">Finance</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li className="dropdown">
  <span className="dropdown-toggle">More ▾</span>
  <div className="dropdown-menu">
    <div className="dropdown-col">
      <h4>News</h4>
      <Link to="/news/today">Today's News</Link>
      <Link to="/news/us">US</Link>
      <Link to="/news/politics">Politics</Link>
      <Link to="/news/world">World</Link>
      <Link to="/news/weather">Weather</Link>
      <Link to="/news/Climate">Climate Change</Link>
      <Link to="/news/Health">Health</Link>
      <Link to="/news/Science">Science</Link>
      <Link to="/news/Original">Original</Link>
      <Link to="/news/Newsletters">Newsletters</Link>
      <Link to="/news/Game">Game</Link>

    </div>
    <div className="dropdown-col">
      <h4>Life</h4>
      <Link to="/life/health">Health</Link>
      <Link to="/life/travel">Travel</Link>
      <Link to="/life/food">Food</Link>
      <Link to="/life/parenting">Parenting</Link>
      <Link to="/news/Style-and-Beauty">Style and Beauty</Link>
      <Link to="/news/Horoscopes">Horoscopes</Link>
      <Link to="/news/Shopping">Shopping</Link>
      <Link to="/news/Food">Food</Link>
      <Link to="/news/Travel">Travel</Link>
      <Link to="/news/Autos">Autos</Link>
      <Link to="/news/Buying-Guide">Buying Guide</Link>

    </div>
    <div className="dropdown-col">
      <h4>Entertainment</h4>
      <Link to="/news/Celebrity">Celebrity</Link>
      <Link to="/news/TV">TV</Link>
      <Link to="/news/Music">Music</Link>
      <Link to="/news/How-to-Watch">How to Watch</Link>
      <Link to="/news/Interviews">Interviews</Link>
      <Link to="/news/Videos">Videos</Link>

    </div>

    <div className="dropdown-col">
      <h4>Finance</h4>
      <Link to="/news/My-Portfolio">My Portfolio</Link>
      <Link to="/news/Watchlists">Watchlists</Link>
      <Link to="/news/Markets">Markets</Link>
      <Link to="/news/News">News</Link>
      <Link to="/news/Videos">Videos</Link>
      <Link to="/news/Screeners">Screeners</Link>
      <Link to="/news/Personal-Finance">Personal Finance</Link>
      <Link to="/news/Crypto">Crypto</Link>
      <Link to="/news/Sectors">Sectors</Link>

    </div>

    <div className="dropdown-col">
      <h4>Sports</h4>
     <Link to="/news/Fantasy">Fantasy</Link>
      <Link to="/news/NFL">NFL</Link>
      <Link to="/news/NBA">NBA</Link>
      <Link to="/news/MLB">MLB</Link>
      <Link to="/news/NHL">NHL</Link>
      <Link to="/news/College-Football">College Football</Link>
      <Link to="/news/College-Basketball">College Basketball</Link>
      <Link to="/news/Soccer">Soccer</Link>
      <Link to="/news/NFL-Draft">NFL Draft</Link>
      <Link to="/news/Yahoo-Sports-AM">Yahoo Sports AM</Link>

    </div>

    
    <div className="dropdown-col">
      <h4>New on World Trends</h4>
      <Link to="/news/Creators">Creators</Link>
      <Link to="/news/Tech">Tech</Link>
      <Link to="/news/Local-Services">Local Services</Link>
      <Link to="/news/Selected-Edition">Selected Edition</Link>
      <Link to="/news/US-English">US English</Link>

    </div>
  </div>
</li>

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
