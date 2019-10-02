import React, { Component } from 'react';
import Siema from 'siema';


class Saved extends Component {

    state = {}

    slider_init = () => {
        new Siema({
            selector: '.saved-controller',
            duration: 200,
            easing: 'ease-out',
            perPage: 6,
            startIndex: 0
        });
    }

    componentDidMount() {

        // Initialize Slider
        this.slider_init()
    }

    handleNewSlider = (props) => {

        return (
            <div className="slider-container">
            <h3>Saved</h3>
            <div className="saved-controller">
                <div className="slide-card">Hi, I am a book!</div>
                <div className="slide-card">Hi, I am a book!</div>
                <div className="slide-card">Hi, I am a book!</div>
                <div className="slide-card">Hi, I am a book!</div>
                <div className="slide-card">Hi, I am a book!</div>
                <div className="slide-card">Hi, I am a book!</div>
                <div className="slide-card">Hi, I am a book!</div>
                <div className="slide-card">Hi, I am a book!</div>
                <div className="slide-card">Hi, I am a book!</div>
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