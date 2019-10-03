import React, { Component } from 'react';
import { ThreeDots } from 'svg-loaders-react';
import Siema from 'siema';
import HeartIcon from '../assets/imgs/heart_icon.png';



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
                                <a href="#">
                                    <img src={HeartIcon} alt="Save Book" />
                                </a>
                            </div>
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
            startIndex: 0,
            loop: true
        });
    }


    handleNewSlider = () => {
        return (
            <div className="slider-container">
                <div className="slider-header">
                    <h2>Featured</h2>
                    <div>
                        <button className="btn-slider">Prev</button>
                        <button className="btn-slider">Next</button>
                    </div>
                </div>
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