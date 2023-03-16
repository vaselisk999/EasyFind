import React from "react";
import "./style.css";
function Index() {


  return (
    <div className="container">
      <header>
        <section className="header-nav-area">
          <div className="brand_area">
              <span>
                EasyFind
              </span>
          </div>
          <div id="nav_container">
            <nav id="navigation">
              <a href="/" className="nav-element">
                Home
              </a>
              <a href="about" className="nav-element">
                About
              </a>
            </nav>
          </div>
          <span className="menu-icon"></span>
        </section>
          <div className="wrapper">
            <div className="article">
              <h1>
                Find your book of choice.
              </h1>
              <h3>Find books with just one search!</h3>
              <p>
                Since 1997, BookFinder has made it easy to find any book at the best price. 
                Whether you want the cheapest reading copy or a specific collectible edition, 
                with BookFinder, you'll find just the right book. BookFinder.com searches the 
                inventories of over 100,000 booksellers worldwide, accessing millions of books 
                in just one simple step.
              </p>
            </div>
          </div>
      </header>
    </div>
  );

};

export default Index;
