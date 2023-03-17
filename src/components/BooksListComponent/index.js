import React, { useState, Fragment, useEffect } from "react";
import "./style.css";
import BookComponent from './../BookComponent';
import { animated, useTrail } from '@react-spring/web'
import data from './../../utils/data.json';

export default function BooksListComponent({ triggered }) {
    const [books, setBooks] = useState(data.items);

    // use Tril hook automatically orchestrates the springs to stagger one after the other.
    const [trail, api] = useTrail(books.length, () => ({ x: 0, y: 100, opacity: 0 }))

    useEffect(() => {
        triggereEventListener();
    }, [triggered])

    // ToDo should be refactored
    // click event listener 
    const triggereEventListener = () => {
        if (triggered) {
            api.start({ x: 0, y: 0, opacity: 1 })
        } else {
            // api.start({ x: 0, y: 800, opacity: 0 })
        }
    }

    return (
        <section className="books-list-wrapper">
            <div className="books-list-conteiner">
                {
                    trail.map((style, index) => {
                        return (
                            <Fragment key={index}>
                                <animated.div style={style}>
                                    <BookComponent  {...books[index]} />
                                </animated.div>
                            </Fragment>
                        )
                    })
                }
            </div>
        </section>
    )
}