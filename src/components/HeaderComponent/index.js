import React from "react";
import "./style.css";
import Search from "../SearchComponent/index";

const index = () => {
  return (
    <div class="container-sm">
      <div class="row align-items-start">
        <div class="col">
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
