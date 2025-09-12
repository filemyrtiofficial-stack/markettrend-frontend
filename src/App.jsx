import Navbar from "./components/Navbar";
import NewsLayout from "./Layout/NewsLayout";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <NewsLayout />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
