import React, { Component } from 'react';
import { ThreeDots } from 'svg-loaders-react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

class Featured extends Component {

    // Render Loading Icon
    render_loading = () => {
        return (
            <div className="loading">
                <ThreeDots />
            </div>
        )
    }

    // Render Featured Books Slider
    render_featured_books = (props) => {
        return (
            <>
                {
                    props.loadedFeaturedBooks.map((item, key) =>
                        <FeaturedCard
                            title={item.title}
                            cover={item.imageLink}
                            id={key}
                            key={key}
                            handleBookSave={props.handleBookSave}
                        />
                    )
                }
            </>
        )
    }

    handleNewSlider = (props) => {
        return (
            <div className="featured-container">
                <div className="featured-header">
                    <h2>Featured</h2>
                    <div>
                        <button className="btn-slider">Prev</button>
                        <button className="btn-slider">Next</button>
                    </div>
                </div>
                <div className="featured-content">
                    {
                        props.loadedFeaturedBooks.length > 0 ? this.render_featured_books(props) : this.render_loading()
                    }
                </div>
            </div>
        )
    }

    render() {
        return (
            this.handleNewSlider(this.props)
        )
    }
}

export default Featured;