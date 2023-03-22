import React, { useState, useEffect } from "react";
import BookComponent from './../BookComponent';
import "./style.css";

export default function BooksListComponent({ books }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(books.items);
    }, [books.items])

    return (
        <section className="books-list-wrapper">
            <div className="books-list-conteiner">
                {/* runs through the array of books */}
                {items ? items.map((val, key) => <BookComponent key={key}  {...val} />) : null}
            </div>
        </section>
    )
}