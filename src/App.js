import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";
import AboutPageComponent  from "./components/AboutPageComponent";
import Navbar from "./components/Navbar/Navbar";
import FooterComponent from "./components/FooterComponent";

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
      <FooterComponent />
  </>
  );
}

export default App;



