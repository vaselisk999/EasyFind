import React, { useState, Fragment, useEffect } from "react";
import "./style.css";
import BookComponent from './../BookComponent';
import { animated, useTrail } from '@react-spring/web'
import data from './../../utils/data.json';

export default function BooksListComponent({ books }) {
    const [items, setItems] = useState([]);

    // use Tril hook automatically orchestrates the springs to stagger one after the other.
    // const [trail, api] = useTrail(books.length? books.items.length: 0, () => ({ x: 0, y: 100, opacity: 0 }))
    
    
    useEffect(() => {
        console.log(books.items)
        setItems(books.items)
        // triggereEventListener();
    })
    
    // ToDo should be refactored
    // click event listener 
    // const triggereEventListener = (items) => {
    //     if (items) {
    //         api.start({ x: 0, y: 0, opacity: 1 })
    //     } else {
    //         // api.start({ x: 0, y: 800, opacity: 0 })
    //     }
    // }

    return (
        <section className="books-list-wrapper">
            <div className="books-list-conteiner">
                {/* {
                    trail ? trail.map((style, index) => {
                        return (
                            <Fragment key={index}>
                                <animated.div style={style}>
                                    <BookComponent  {...books.items[index]} />
                                </animated.div>
                            </Fragment>
                        )
                    }) : null
                } */}
                {
                    items? items.map((val, key)=>{
                        return(
                            <BookComponent  {...val} />
                        )
                    }): null
                }
            </div>
        </section>
    )
}