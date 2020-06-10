import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    showModal: false
  };

  openModal = () => {
    this.setState({showModal: true});
  }
  hideModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="siteTitle">green thumb</h1>
          <button id="openInstructions" onClick={this.openModal}>instructions</button>
          {this.state.showModal ? 
            <div id="instructionsModal">
              <div id="modalTextbox">
                <p>welcome to green thumb!</p>
                <a id="close" onClick={this.hideModal}>close</a>
              </div>
            </div> 
            : 
            <div></div>}
        </header>
        <div className="body">
          <div className="plantContainer">
            <img className="plantImage" src="https://i.imgur.com/oj3KRB2.png"></img>
            <div className="actionsContainer">
              <button className="actionButton"><img className="actionImage" src="https://i.imgur.com/Cd69PTX.png" alt="watering can"></img>water plant</button>
              <button className="actionButton"><img className="actionImage" src="https://i.imgur.com/agzi7zf.png" alt="fertilizer"></img>feed plant</button>
              <button className="actionButton"><img className="actionImage" src="https://i.imgur.com/xfU5t06.png" alt="sun"></img>move plant to sun</button>
            </div>
          </div>
        </div>
        <footer>
          <p>©2020 <a href="https://www.janenath.com" target="_blank" rel="noopener noreferrer">Jane Nath</a></p>
          <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
