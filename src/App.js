import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Header from "./components/HeaderComponent/index";
import About  from "./components/HomePageComponent/index";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="pages">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;



