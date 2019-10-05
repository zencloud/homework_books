import React, { Component } from 'react';
import Featured from '../../components/Featured/Featured';
import Saved from '../../components/Saved/Saved';
import ButterToast, {Cinnamon, POS_TOP, POS_BOTTOM, POS_LEFT, POS_RIGHT, POS_CENTER } from 'butter-toast';


class Home extends Component {

    // State
    state = {
        loadedFeaturedBooks: [],
        loadedSavedBooks: []
    };


    handleToast() {

        ButterToast.raise({
            content: <Cinnamon.Crunch
                        scheme={Cinnamon.Slim.SCHEME_DARK}
                        content={() => <div>Added book to your library.</div>}
                        title="Success!"
                        />
        });
    }

    // Save Books
    handleBookSave = (id) => {
        let bookData = this.state.loadedFeaturedBooks[id];
        let postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: bookData.title,
                authors: bookData.authors,
                imageLink: bookData.imageLink,
                storeLink: bookData.storeLink,
                description: bookData.description
            })
        }

        fetch('/api/book/save', postData)
            .then((response) => {

                // Success, render toast
                this.handleToast()

                // Update saved books
                this.handleBookGetSaved();
            });
    }

    // Grab Featured Books
    handleBookGetFeatured = () => {
        fetch(`/api/books/random`)
            .then((response) => response.json())
            .then(data => this.setState({ loadedFeaturedBooks: data }));
    }

    // Fetch book data from API
    handleBookGetSaved = () => {
        fetch(`/api/books/saved`)
            .then((response) => response.json())
            .then(data => this.setState({ loadedSavedBooks: data }));
    }


    componentDidMount() {
        this.handleBookGetFeatured();
        this.handleBookGetSaved();
    }

    // Render
    render() {

        return (
            <div className="page-container">
                <Featured
                    loadedFeaturedBooks={this.state.loadedFeaturedBooks}
                    handleBookSave={this.handleBookSave}
                />
                <Saved 
                    loadedSavedBooks={this.state.loadedSavedBooks}
                    handleBookGetSaved={this.handleBookGetSaved}
                />
            <ButterToast 
                position={{vertical: POS_TOP, horizontal: POS_CENTER}}
                style={{}}
            />
            </div>
        )
    }
}

export default Home;