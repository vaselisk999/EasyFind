import React, { useState } from "react";
import BooksListComponent from './../BooksListComponent';
import SearchComponent from "./../SearchComponent/SearchBar.js";
import { getBooksData } from './../../api';
import Slide from './Slide'

const HomePageComponent = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState({});

  //submit function which gets a list of books by a searching for string
  const handleFormSubmit = event => {
    event.preventDefault();
    if (!search) {
      return;
    }
    getBooksData(search, function (data) {
      setBooks(data);
    });
  }

  //function handle Input Changes
  const handleInputChange = event => {
    setSearch(event.target.value);
  }


  return (
    <div className="container-fluid">
      <Slide />
      <SearchComponent
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        results={search}
      />
      <BooksListComponent books={books} />
    </div>
  );
};

export default HomePageComponent;
