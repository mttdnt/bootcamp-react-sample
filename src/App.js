import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Video from "./Routes/Video";
import Home from "./Routes/Home";
import Clock from "./Components/Clock";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Use Youtube API to Search Videos</h1>
        <Clock />
        <Router>
          <Route path="/home" component={Home} />
          <Route path="/video/:videoId" component={Video} />
        </Router>
      </div>
    );
  }
}

export default App;
