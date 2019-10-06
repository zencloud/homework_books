import React, { Component } from 'react';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Search extends Component {

    state = {
        loadedSearchBooks: [],
        searchInput: ""
    }


    // Grab Featured Books
    handleSearchBooks = (bookSearch) => {
        fetch(`/api/book/search/${bookSearch}`)
            .then((response) => response.json())
            .then(data => this.setState({ loadedSearchBooks: data }));
    }

    handleSearchInput = (event) => {
        this.setState({
            searchInput: event.target.value
        });
    }

    handleSearchSubmit = (event) => {

        if (event.key === 'Enter') {
            this.handleSearchBooks(this.state.searchInput);
        }
    }

    // Save Books
    handleBookSave = (id) => {
        let bookData = this.state.loadedSearchedBooks[id];
        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: bookData.title,
                authors: bookData.authors,
                imageLink: bookData.imageLink,
                storeLink: bookData.storeLink,
                description: bookData.description
            })
        }

        fetch('/api/book/save', postData)
            .then((response) => {
                // Update saved books
                //this.handleBookGetSaved();
            });
    }


    render() {
        return (
            <>
                <div className="search-container">
                    <input
                        value={this.state.searchInput}
                        onChange={this.handleSearchInput}
                        onKeyDown={this.handleSearchSubmit}
                        placeholder="Search Google Books..."
                        className="search-field" />

                    <div className="search-recent-container">
                        <p><i className="far fa-clock" /></p>
                        <ul>
                            <li>Batman</li>
                            <li>Ice Cream</li>
                            <li>War and Peace</li>
                        </ul>
                    </div>
                </div>

                <div className="saved-content">
                    {
                        this.state.loadedSearchBooks.length > 0 ?
                            this.state.loadedSearchBooks.map((item, key) =>

                                <ReactCSSTransitionGroup
                                    component={React.Fragment}
                                    transitionName="fade"
                                    transitionAppear={true}
                                    transitionAppearTimeout={500}
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={500}
                                >
                                    <div key={key} className="saved-card">
                                        <div className="saved-card-book-image-container">
                                            <img src={item.imageLink} alt="Book" />
                                        </div>
                                        <div className="saved-card-info">
                                            <i className="saved-card-book-title">{item.title}</i>
                                            <i className="saved-card-book-description">
                                                {
                                                    item.description.length > 90 ?
                                                        item.description.substring(0, 90) + "..." :
                                                        item.description
                                                }
                                            </i>
                                        </div>
                                    </div>
                                </ReactCSSTransitionGroup>
                            ) : <p>No search results</p>
                    }
                </div>
            </>
        )
    }

}

export default Search;