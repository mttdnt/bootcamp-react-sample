import React from "react";

const Search = props => {
  const { onSearchChange, keywords, onSubmitSearch } = props;

  return (
    <div className="search-container">
      <input
        onChange={onSearchChange}
        value={keywords}
        placeholder="Find videos"
        className="search-input"
      />
      <button onClick={onSubmitSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;
