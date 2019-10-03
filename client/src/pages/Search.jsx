import React, { Component } from 'react';
import Saved from './Saved';

class Search extends Component {

    state = {}

    render() {
        return (
            <div className="search-container">
                <input placeholder="Search Google Books..." className="search-field" />
                <div className="search-recent-container">
                <p><i class="far fa-clock" /></p>
                <ul>
                    <li>Batman</li>
                    <li>Ice Cream</li>
                    <li>War and Peace</li>
                </ul>
                </div>
            </div>
        )
    }

}

export default Search;