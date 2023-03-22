import React from "react";

const AboutPageComponent = () => {
  return (
    <div className="container">
      <div className="row align-self-center">
        <div className="">
          <h2 className="header-title text-capitalize mt-4">
            About Page find your book of choice.
          </h2>
          <br />
          <h3 className="header-subtitle text-capitalize">
            Find books with just one search!
          </h3>
          <p className="header-paragraph fs-18 fw-3">
            Since 2023, EasyFind has made it easy to find any book at the
            best price. Whether you want the cheapest reading copy or a specific
            collectible edition, with EasyFind, you'll find just the right
            book. https://easyfindbook.netlify.app/ searches the inventories of over 100,000
            booksellers worldwide, accessing millions of books in just one
            simple step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPageComponent;
