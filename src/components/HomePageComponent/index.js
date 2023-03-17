import React, { useState } from "react";
import BooksListComponent from './../BooksListComponent';
import SearchComponent from "./../SearchComponent";
import Slide from './Slide'


const HomePageComponent = () => {
  const [trigger, settriggered] = useState(false);
  return (
    <div className="container-sm content-fluent">
      <Slide />
      <SearchComponent />
      <button onClick={() => settriggered(state => !state)}>click</button>
      <BooksListComponent triggered={trigger} />
    </div>
  );
};

export default HomePageComponent;
