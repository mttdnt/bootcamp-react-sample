import React, { Component } from "react";
import "./App.css";

class App extends Component {
  onSearchChange = e => {};

  onSubmitSearch = () => {};
  render() {
    return (
      <div className="App">
        <h1>Use Youtube API to Search Videos</h1>
        <div className="search-container">
          <input
            onChange={this.onSearchChange}
            value={this.keywords}
            placeholder="Find videos"
            className="search-input"
          />
          <button onClick={this.onSubmitSearch} className="search-button">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default App;
