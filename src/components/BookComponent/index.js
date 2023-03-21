import React from "react";
import { subscriber } from './../../utils/subscriber';
import './style.css';
import { getBooksDataByID } from './../../api'

export default function BookComponent({id, volumeInfo, accessInfo}) {
    //cards destructed data
    const { authors, categories, title, imageLinks, industryIdentifiers } = volumeInfo;

    
    // passes the link 
    const clickOnButton = (link) => {
        subscriber.clickOnButton(link)
        
        console.log(industryIdentifiers.identifier, "8888888888888888888")
        console.log(id, "8888888888888888888")
        getBooksDataByID(id, (data) => {
            console.log(data)
        })
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
                <button type="button" onClick={()=>{clickOnButton(accessInfo.webReaderLink)}} className="btnaddtowishlist">
                    <span>Read a book</span>
                </button>
            </div>
            <p>{categories ? categories.join("") : null}</p>
            <hr />
            <h6>{title}</h6>
            {authors ? <i> by: { authors }</i>: null}
        </div>
    )
}