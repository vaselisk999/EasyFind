import './App.css';
import Header from "./components/HeaderComponent/index";
import BooksListComponent from './components/BooksListComponent';
import React, { useState } from 'react';


function App() {
  const [trigger, settriggered] = useState(false);

  return (
    <div className="App">
      <Header />

      <div className="content-fluent">
        <button onClick={()=>settriggered(state => !state)}>click</button>
        <BooksListComponent triggered={trigger} />
      </div>
    </div>
  );
}

export default App;
