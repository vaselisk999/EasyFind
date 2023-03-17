import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";
import AboutPageComponent  from "./components/AboutPageComponent";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="pages">
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePageComponent />} />
            <Route path="/about" element={<AboutPageComponent />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;



