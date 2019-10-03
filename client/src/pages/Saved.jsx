import React, { Component } from 'react';
import Siema from 'siema';
import { ThreeDots } from 'svg-loaders-react';


class Saved extends Component {

    state = {
        loadedBooks: []
    }

    // Initial loading of books on page load
    componentDidMount() {
        this.handleBookSearch();
    }

    // Fetch book data from API
    handleBookSearch = () => {
        fetch(`/api/books/saved`)
            .then((response) => response.json())
            .then(data => this.setState({ loadedBooks: data }));
    }


    // Render Loading Icon
    render_loading = () => {
        return (
            <div className="loading">
                <ThreeDots />
            </div>
        )
    }

    // Render Featured Books Slider
    render_featured_books = () => {
        return (
            <>
                {
                    this.state.loadedBooks.map((item, key) =>
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
                    )
                }
            </>
        )
    }

    // Determine which display to load
    handleDisplaySaved = () => {
        return (
            <div className="slider-container">
                <div className="slider-header">
                    <h3>Saved</h3>
                </div>
                <div className="saved-container">
                    {
                        this.state.loadedBooks.length > 0 ? this.render_featured_books() : this.render_loading()
                    }
                </div>
            </div>
        )
    }


    // Render component
    render() {
        return (
            this.handleDisplaySaved()
        )
    }
}

export default Saved;