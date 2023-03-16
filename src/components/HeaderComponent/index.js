import React from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import Search from "../SearchComponent/index";




const index = () => {
  return (
    <div className="holder container">
      <Navbar />
      <div className="header">
        <div className="row">
          <div className="header-content p-5 flex flex-c text-center me-5 text-dark col-lg-6 col-sm-3">
            <h2 className="header-title text-capitalize">
              find your book of choice.
            </h2>
            <br />
            <div>
              <h3>Find books with just one search!</h3>
              <p className="header-text fs-20 fw-3">
                Since 2023, Easy BookFinder has made it easy to find any book at
                the best price. Whether you want the cheapest reading copy or a
                specific collectible edition, with BookFinder, you'll find just
                the right book. BookFinder.com searches the inventories of over
                100,000 booksellers worldwide, accessing millions of books in
                just one simple step.
              </p>
            </div>
          </div>
          <div className=" search-bar col ms-5 p-5 align-self-center">
            <Search/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default index;
