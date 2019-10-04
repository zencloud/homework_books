import React, { Component } from 'react';
import { ThreeDots } from 'svg-loaders-react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
                <ReactCSSTransitionGroup
                    component={React.Fragment}
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
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
                </ReactCSSTransitionGroup>
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