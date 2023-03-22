import React from "react";
import { subscriber } from './../../utils/subscriber';
import { Link } from "react-router-dom";
import './style.css';

export default function BookComponent({ id, volumeInfo }) {
    //cards destructed data
    const { authors, title, imageLinks, industryIdentifiers } = volumeInfo;

    // subscriber witch receives parameters after click on button
    const clickOnButton = (number) => {
        subscriber.clickOnButton(number)
    }

    // this function truncates long text
    const truncate = (str, length, cut) => {
        return str.length > length ? str.substring(0, cut) + "..." : str;
    }

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
                <Link to={id}>
                    <button type="button" onClick={() => { clickOnButton(industryIdentifiers[0].identifier) }} className="btnaddtowishlist">
                        <span>Read a book</span>
                    </button>
                </Link>
            </div>
            <h6>{truncate(title, 20, 18)}</h6>
            {authors ? <i> by: {truncate(authors.join(""), 20, 18)}</i> : null}
        </div>
    )
}