import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Header from "./components/HeaderComponent/index";
import About  from "./components/HomePageComponent/index";
import Navbar from "./components/Navbar/Navbar";
import BooksList from './components/SearchComponent/SearchBar'; 

function App() {
  return (
    <><>
      <Router>
        <div className="pages">
          <Navbar />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
    <div className="App">
        <BooksList />
      </div></>
)

}

export default App;



