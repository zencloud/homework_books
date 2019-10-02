import React, { Component } from 'react';

class Home extends Component {

    // State
    state = {
        loadedBooks: []
    };

    // Load books
    handleBookSearch = () => {
        fetch(`/api/books/`)
            .then((response) => response.json())
            .then(data => this.setState({ loadedBooks: data }));
    }

    componentDidMount() {
        this.handleBookSearch();
    }

    // Render
    render() {
        return (
            <div>
                <p>Books:</p>
                {
                    this.state.loadedBooks.map((item, key) =>
                        <p key={key}>{item}</p>
                    )}
            </div>
        )
    }
}

export default Home;