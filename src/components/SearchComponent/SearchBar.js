import React from 'react'
import axios from 'axios'
// import BookComponent from './../BookComponent';
import './SearchBar.css';



class SearchBar extends React.Component {
    state = {
        bookslist: [],
        input: ''
    };

    search = event => {
        if (!this.state.searchTerm) {
            this.setState({
                booksList: [],
            });
            return;
        }
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&key=AIzaSyBHjWHoinFLiY5XsV8Hze0Zvz-oZ9rrl5k`
            )
            .then(res => res.data)
            .then(res => {
                // console.log(res.items);
                if (!res.items) {
                    this.setState({ booksList: [] });
                    return;
                }

                const booksList = res.items.map(book => {
                    return { id: book.id, ...book.volumeInfo };
                });

                this.setState({
                    booksList
                });
            });
    };

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    render() {
        const { booksList } = this.state;
            return (
                <div className="App">
                    <header className="App-header">
                        <h1>EasyFind</h1>

                        <form>
                            <input type="text"
                                placeholder="Enter a book title here"
                            />
                            <button className="myButton" type="submit">Search</button>
                        </form>
                    </header>

                </div>
            );
    }
}

export default SearchBar;

