import React, {useEffect} from "react";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";
import AboutPageComponent  from "./components/AboutPageComponent";
import Navbar from "./components/Navbar/Navbar";
import FooterComponent from "./components/FooterComponent";
import BookDetailsComponent from "./components/BookDetailsComponent";
import "./App.css";

import useObservable from "./utils/UseObservable";
import { subscriber } from "./utils/subscriber";

function App() {

  const number = useObservable(subscriber.subscribeOnClick());

  useEffect(() => {

  },[number])

  return (
    <>
      <Router>
        <div className="pages">
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePageComponent />} />
            <Route path="/:id" element={<BookDetailsComponent number={number}/>} />
            <Route path="/about" element={<AboutPageComponent />} />
          </Routes>
        </div>
      </Router>
      <FooterComponent />
  </>
  );
}

export default App;



