import React, { Component } from 'react';
import Featured from './Featured';
import Saved from './Saved';


class Home extends Component {

    // State
    state = {
        loadedBooks: []
    };


    // Render
    render() {
        return (
            <div>
                <Featured />
                {/* <Saved /> */}
            </div>
        )
    }
}

export default Home;