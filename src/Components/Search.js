import React from 'react';

const Search = (props) => {
    const { onSearchChange, keywords, onSubmitSearch } = props;

    return (
        <div>
            <input
                onChange={onSearchChange}
                value={keywords}
                placeholder="Find videos"
            />
            <button
                onClick={onSubmitSearch}
            >
                Search
            </button>
        </div>
    );
};

export default Search;