import React, {useState} from 'react';
import './SearchBar.css';

export default function SearchBar() {
    const [title, setTitle] = useState('');
    
      return (
        <div className="App">
          <header className="App-header">
            <h1>EasyFind</h1>
    
            <form>
              <input type="text" 
              placeholder="Enter a book title here" 
              value={title}
              onChange={handleChange}
              />
              <button className="myButton" type="submit">Search</button>
            </form>
          </header>   
        
        </div>
      );
}


