import React from 'react'
import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <>
            <form>
                <input 
                    type="text"
                    value={props.search}
                    placeholder="Enter a book title here"
                    onChange={props.handleInputChange}
                />
                <button className="myButton" onClick={props.handleFormSubmit} type="submit">Search</button>
            </form>
        </>
    )
}