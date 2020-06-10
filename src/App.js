import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    showModal: false,
    go: false,
    day: 0,
    health: 100
  };

  openModal = () => {
    this.setState({showModal: true});
  }
  hideModal = () => {
    this.setState({showModal: false});
  }
  startGame = () => {
    this.setState({go: true});
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        day: prevState.day + 1
      }));
    }, 1000);

  }
  pauseGame = () => {
    this.setState({go: false});
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="siteTitle">green thumb</h1>
          <div className="headerButtons">
            <button id="openInstructions" onClick={this.openModal}>instructions</button>
            {this.state.go ? <button id="pause" onClick={this.pauseGame}>pause</button>
            : <button id="start" onClick={this.startGame}>let's start!</button>
            }
          </div>
          {this.state.showModal ? 
            <div id="instructionsModal">
              <div id="modalTextbox">
                <h3>Welcome to green thumb!</h3>
                <br/>
                <p>You took a trip to the plant shop this morning and found a beautiful new plant for your desk.</p>
                <br/>
                <p>Only problem? You accidentally threw out the handy care instructions from the shopkeeper!</p>
                <br/>
                <p>Let's see if you can figure out how to take care of your new plant!</p>
                <br/>
                <p>If you're plant's health goes down to 0, it will be time to take it to the compost heap  :(</p>
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
          <div className="statusBar">
            <p>day: {this.state.day}</p>
            <p>health: {this.state.health}%</p>
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
