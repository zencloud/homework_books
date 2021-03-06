import React, { Component } from 'react';
import { ThreeDots } from 'svg-loaders-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Saved extends Component {

    // Initial loading of books on page load
    componentDidMount() {
       
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
    render_saved_books = (props) => {
        return (
            <>
                {   
                    props.loadedSavedBooks.map((item, key) =>

                        <ReactCSSTransitionGroup
                            component={React.Fragment}
                            transitionName="fade"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                        >
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
                        </ReactCSSTransitionGroup>
                    )
                }
            </>
        )
    }

    // Determine which display to load
    handleDisplaySaved = (props) => {
        return (
            <div className="saved-container">
                <div className="slider-header">
                    <h2>Saved</h2>
                </div>
                <div className="saved-content">
                    {
                        props.loadedSavedBooks.length > 0 ? this.render_saved_books(props) : this.render_loading()
                    }
                </div>
            </div>
        )
    }


    // Render component
    render() {
        return (
            this.handleDisplaySaved(this.props)
        )
    }
}

export default Saved;