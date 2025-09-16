import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsLayout from "./Layout/NewsLayout";
import Sidebar from "./components/Sidebar";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";   // ✅ Import footer
import "./App.css";

function App() {
  const location = useLocation();

  const comingSoonPages = [
    { path: "/coming-soon", name: "page", launchDate: new Date(new Date().setDate(new Date().getDate() + 30)) },
    { path: "/crypto", name: "Crypto", launchDate: new Date(new Date().setDate(new Date().getDate() + 45)) },
    { path: "/commodities", name: "Commodities", launchDate: new Date(new Date().setDate(new Date().getDate() + 60)) },
    { path: "/etfs", name: "ETFs", launchDate: new Date(new Date().setDate(new Date().getDate() + 20)) },
  ];

  const isFullPage = comingSoonPages.some(
    (page) => page.path === location.pathname
  );

  return (
    <>
      {!isFullPage && <Navbar />}

      <div className="main-layout">
        <Routes>
          {/* Default route */}
          <Route path="/" element={<NewsLayout />} />

          {/* Dynamic Coming Soon routes */}
          {comingSoonPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <ComingSoon
                  pageName={page.name}
                  launchDate={page.launchDate}
                />
              }
            />
          ))}

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/coming-soon" />} />
        </Routes>

        {!isFullPage && <Sidebar />}
      </div>

      {/* ✅ Show footer only if not on ComingSoon full page */}
      {!isFullPage && <Footer />}
    </>
  );
}

export default App;
