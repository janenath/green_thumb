import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="siteTitle">green thumb</h1>
        <button className="instructions">instructions</button>
      </header>
      <body>
        <img className="plantImage" src="https://i.imgur.com/oj3KRB2.png"></img>
      </body>
      <footer>
        <p>©2020 <a href="https://www.janenath.com" target="_blank" rel="noopener noreferrer">Jane Nath</a></p>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>
      </footer>
    </div>
  );
}

export default App;
