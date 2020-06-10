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
        <div className="plantContainer">
          <img className="plantImage" src="https://i.imgur.com/oj3KRB2.png"></img>
          <div className="actionsContainer">
            <button className="actionButton"><img className="actionImage" src="https://i.imgur.com/Cd69PTX.png" alt="watering can"></img>water plant</button>
            <button className="actionButton"><img className="actionImage" src="https://i.imgur.com/agzi7zf.png" alt="fertilizer"></img>feed plant</button>
            <button className="actionButton"><img className="actionImage" src="https://i.imgur.com/xfU5t06.png" alt="sun"></img>move plant to sun</button>
          </div>
        </div>
      </body>
      <footer>
        <p>©2020 <a href="https://www.janenath.com" target="_blank" rel="noopener noreferrer">Jane Nath</a></p>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>
      </footer>
    </div>
  );
}

export default App;
