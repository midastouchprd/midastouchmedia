import React, { Component } from 'react';
import './App.css';
import './bkg-vid.css';

// d3q9x42dh2gz6c.cloudfront.net/midastouchmedia-bkg.mp4

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="fullscreen-bg">
          <video loop muted autoPlay className="fullscreen-bg__video">
            <source
              src="https://d3q9x42dh2gz6c.cloudfront.net/midastouchmedia-bkg.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <a>Midas Touch Media</a>
      </div>
    );
  }
}

export default App;
