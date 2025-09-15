import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsLayout from "./Layout/NewsLayout";
import Sidebar from "./components/Sidebar";
import ComingSoon from "./components/ComingSoon";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Routes>
          {/* Default route */}
          <Route path="/" element={<NewsLayout />} />

          {/* All links go to ComingSoon */}
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>

        <Sidebar />
      </div>
    </>
  );
}

export default App;
