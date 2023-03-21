import React, { useEffect, useState } from "react";
import BooksListComponent from './../BooksListComponent';
import SearchComponent from "./../SearchComponent/SearchBar.js";
import { getBooksData } from './../../api';
import ModalWindowComponent from '../ModalWindowComponent'
import Slide from './Slide'
import useObservable from "../../utils/UseObservable";
import { subscriber } from "../../utils/subscriber";


const HomePageComponent = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState({});
  const [toggle, setToggle] = useState(false);

  const number = useObservable(subscriber.subscribeOnClick());

  useEffect(() => {
    if (number) {
      showModalWindow(number);
    }
  })

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!search) {
      return;
    }

    getBooksData(search, function (data) {
      setBooks(data);
      console.log(data.items, "11111");
    });
  }

  const handleInputChange = event => {
    setSearch(event.target.value);
  }

  const showModalWindow = (number) => {
    console.log(number, "22222222222222222222222222")
    setToggle(true);
  }

  return (
    <div className="container-sm">
      <Slide />
      <SearchComponent
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        results={search}
      />
      <BooksListComponent books={books} />
      {toggle ? <ModalWindowComponent number={number} /> : null}
    </div>
  );
};

export default HomePageComponent;
