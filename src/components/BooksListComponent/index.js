import React, { useState } from "react";
import "./style.css";
import BookComponent from './../BookComponent';
import data from './../../utils/data.json';

export default function BooksListComponent() {
    const [books, setBooks] = useState(data);
    return (
        <section className="books-list-wrapper">
            <h2 className="books-list-title"> Books List</h2>
            <div className="books-list-conteiner">
                {
                    books.items.map((value) => <BookComponent key={value.id} {...value} />)
                }

            </div>
        </section>
    )
}