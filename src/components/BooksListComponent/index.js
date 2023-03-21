import React, { useState, useEffect } from "react";
import "./style.css";
import BookComponent from './../BookComponent';

export default function BooksListComponent({ books }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(books.items);
    }, [books.items])

    return (
        <section className="books-list-wrapper">
            <div className="books-list-conteiner">
                {items ? items.map((val, key) => <BookComponent key={key}  {...val} />) : null}
            </div>
        </section>
    )
}