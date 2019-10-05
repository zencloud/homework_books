import React, { Component } from 'react';
import { ThreeDots } from 'svg-loaders-react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



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

        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 6000, min: 50 },
                items: 6,
                slidesToSlide: 3
            }
        };

        return (
            <Carousel
                responsive={responsive}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={100}
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
            </Carousel>
        )
    }

    handleNewSlider = (props) => {
        return (
            <div className="featured-container">
                <div className="featured-header">
                    <h2>Featured</h2>
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