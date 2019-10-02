import React, { Component } from 'react';
import Siema from 'siema';


class Featured extends Component {

    state = {}

    slider_init = () => {
        new Siema({
            selector: '.slider-controller',
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
            <h2>Featured</h2>
            <div className="slider-controller">
                <div className="slide-card">Hi, I am a slide 1</div>
                <div className="slide-card">Hi, I am a slide 2</div>
                <div className="slide-card">Hi, I am a slide 3</div>
                <div className="slide-card">Hi, I am a slide 4</div>
                <div className="slide-card">Hi, I am a slide 4</div>
                <div className="slide-card">Hi, I am a slide 4</div>
                <div className="slide-card">Hi, I am a slide 4</div>
                <div className="slide-card">Hi, I am a slide 4</div>
                <div className="slide-card">Hi, I am a slide 5</div>
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