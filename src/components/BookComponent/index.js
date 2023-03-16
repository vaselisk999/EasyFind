import React from "react";
import './style.css';

export default function BookComponent({ volumeInfo }) {
    //cards destructed data
    const { authors, categories, title, imageLinks } = volumeInfo;

    return (
        <div className="book-info-wrapper">
            <div className="book-thumbnail-wrapper">
                {imageLinks ?
                    <div className="bookimg">
                        <div className="frontcover">
                            <img className="book-thumbnail" src={imageLinks?.thumbnail} alt={title} />
                        </div>
                        <div className="backcover">
                            <img className="book-thumbnail" src={imageLinks?.thumbnail} alt={title} />
                        </div>
                    </div>
                    :
                    <div className="bookimg">book is not provided</div>
                }
                {/* adds to wishlist hyperlink */}
                <a href="javascript:void(0);" className="btnaddtowishlist">
                    <span>add to wishlist</span>
                </a>
            </div>
            <p>{categories.join('')}</p>
            <hr />
            <h6>{title}</h6>
            <i>by: {authors}</i>
        </div>
    )
}