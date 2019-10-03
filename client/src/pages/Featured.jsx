import React, { Component } from 'react';
import { ThreeDots } from 'svg-loaders-react';
import Siema from 'siema';



class Featured extends Component {

    state = {
        updated: false,
        loadedBooks: []
    }

    // Load books
    handleBookSearch = () => {
        fetch(`/api/books/random`)
            .then((response) => response.json())
            .then(data => this.setState({ loadedBooks: data }));
    }

    componentDidMount() {
        this.handleBookSearch();
    }

    render_loading = () => {
        return (
            <div className="loading">
                <ThreeDots />
            </div>
        )
    }

    render_featured_books = () => {
        return (
            <>
            {   
                this.state.loadedBooks.map((item, key) =>
                    <div key={key} className="slide-card">
                        <img src={item.imageLink} alt="Book" />
                    </div>
                )
            }
            </>
        )
    }

    // Initialize New slider when the component changes
    componentDidUpdate() {
        const mySlider = new Siema({
            selector: '.slider-controller',
            duration: 200,
            easing: 'ease-out',
            perPage: 6,
            startIndex: 0
        });
    }


    handleNewSlider = () => {
        return (
            <div className="slider-container">
                <h2>Featured</h2>
                <div className="slider-controller">
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

export default Featured;