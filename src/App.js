import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Video from "./Routes/Video";
import Home from "./Routes/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/video/:videoId" component={Video} />
        </Router>
      </div>
    );
  }
}

export default App;
