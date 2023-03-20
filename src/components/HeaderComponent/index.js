import React from "react";
import "./style.css";
import Search from "../SearchComponent/SearchBar";

const index = () => {
  return (
    <div className="container-sm">
      <div className="row align-items-start">
        <div className="col">
          <h2 className="header-title text-capitalize mt-4">
              find your book of choice.
            </h2>
            <br />
            <h3 className="header-subtitle text-capitalize">
              Find books with just one search!
            </h3>
            <Search />
        </div>
      </div>
    </div>
  );
};

export default index;
