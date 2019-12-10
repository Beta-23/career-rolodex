import React from 'react';

import './search-box.styles.css';

// functional component that get's props and renders html, no internal state or no access to lifecycle methods
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className= 'search'
        type='search' 
        placeholder= {placeholder} 
        onChange={handleChange} 
    />
)