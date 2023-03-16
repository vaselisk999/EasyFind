import React from "react";
import './style.css';

export default function BookComponent({ volumeInfo }) {

    const { authors, categories, description, maturityRating, publishedDate, publisher, subtitle, title, imageLinks } = volumeInfo;

    return (
        <div className="book-info-wrapper">
            <h4>{title}</h4>
            <div className="book-thumbnail-wrapper">
                {imageLinks ? <img className="book-thumbnail" src={imageLinks?.thumbnail} alt="title" /> : null}
            </div>

            <i>{authors}</i>
            {subtitle ? <p>{subtitle}</p> : null}
            <p>categories: {categories.join('')}</p>
            {/* <p>{maturityRating}</p> */}
            <p>published: {publishedDate}</p>
            {/* {publisher ? <p>{publisher}</p> : null} */}
            {/* {description ? <p>{description}</p> : null} */}
        </div>
    )
}