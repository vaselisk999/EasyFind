import React from 'react'
import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <>
            <form className='search-wrapper'>
                <input
                    type="text"
                    className='search-input'
                    value={props.search}
                    placeholder="Enter a book title here"
                    onChange={props.handleInputChange}
                />

                <button className="search-button" onClick={props.handleFormSubmit} type="submit">
                    <img src={require('./../../assets/images/search_icon.png')} alt="icon" />
                </button>

            </form>
        </>
    )
}