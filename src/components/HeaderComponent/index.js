import React from "react";
import "./style.css";
import Search from "../SearchComponent/index";

const index = () => {
  return (
    <div>
      <header className="header row">
        <div className="col-lg-10 sm-6 header-content flex flex-c text-center text-dark">
          <h2 className="header-title text-capitalize mt-5">
            find your book of choice.
          </h2>
          <br />
          <h3 className="header-subtitle text-capitalize">Find books with just one search!</h3>
          <p className="header-paragraph fs-18 fw-3">
            Since 2023, Easy BookFinder has made it easy to find any book at the
            best price. Whether you want the cheapest reading copy or a specific
            collectible edition, with BookFinder, you'll find just the right
            book. BookFinder.com searches the inventories of over 100,000
            booksellers worldwide, accessing millions of books in just one
            simple step.
          </p>
          <Search />
        </div>
      </header>
    </div>
  );
};

export default index;
