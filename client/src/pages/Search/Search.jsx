import React, { Component } from 'react';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';

class Search extends Component {

    state = {
        loadedSearchBooks: []
    }


    // Grab Featured Books
    handleSearchBooks = (bookSearch) => {
        fetch(`/api/books/search/${bookSearch}`)
            .then((response) => response.json())
            .then(data => this.setState({ loadedFeaturedBooks: data }));
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

                {
                    this.state.loadedSearchBooks.length > 0 ? 
                        this.state.loadedSearchBooks.map((item, key) =>
                        <FeaturedCard
                            title={item.title}
                            cover={item.imageLink}
                            id={key}
                            key={key}
                            handleBookSave={this.handleBookSave}
                        />
                    ) : <p>No search results</p>
                }
            </div>
        )
    }

}

export default Search;