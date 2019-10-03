import React, { Component } from 'react';
import Siema from 'siema';
import { ThreeDots } from 'svg-loaders-react';


class Saved extends Component {

    state = {
        loadedBooks: []
    }


    // Save Books
    // handleSaveBook = (id) => {
    //     let bookData = this.state.loadedBooks[id];
    //     console.log(id);
    //     let postData = {

    //         method: 'POST',
    //         headers: {'Content-Type':'application/json'},
    //         body: JSON.stringify({
    //             title: bookData.title,
    //             authors: bookData.authors,
    //             imageLink: bookData.imageLink,
    //             storeLink: bookData.storeLink,
    //             description: bookData.description
    //         })
    //     }

    //     fetch('/api/book/save', postData)
            
    //         .then((response) => {
    //             console.log(response);
    //         });

    // }

    // Load books
    handleBookSearch = () => {
        fetch(`/api/books/saved`)
            .then((response) => response.json())
            .then(data => this.setState({ loadedBooks: data }));
    }

    componentDidMount() {
        this.handleBookSearch();
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
                        <div key={key} className="slide-card">
                            <img src={item.imageLink} alt="Book" />
                            <div className="slide-card-hover">
                            </div>
                        </div>
                    )
                }
            </>
        )
    }

    // Initialize New slider when the component changes
    componentDidUpdate() {
        const newSlider = new Siema({
            selector: '.saved-controller',
            duration: 200,
            easing: 'ease-out',
            perPage: 6,
            startIndex: 0,
            loop: true
        });
    }


    handleNewSlider = () => {
        return (
            <div className="slider-container">
                <div className="slider-header">
                    <h3>Saved</h3>
                    <div>
                        <button className="btn-slider">Prev</button>
                        <button className="btn-slider">Next</button>
                    </div>
                </div>
                <div className="saved-controller">
                    {
                        this.state.loadedBooks.length > 0 ? this.render_featured_books() : this.render_loading()
                    }
                </div>
            </div>
        )
    }

    render() {
        return (
            this.handleNewSlider()
        )
    }
}

export default Saved;