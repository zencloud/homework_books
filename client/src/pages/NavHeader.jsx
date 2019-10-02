import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../assets/imgs/logo.png';

class NavHeader extends Component {

    // State
    state = {};

    // Render
    render() {
        return (
            <div className="nav-header">

                {/* Logo */}
                <div className="nav-header-logo-container">
                    <img src={AppLogo} />
                </div>

                {/* Top Site Navigation */}
                <div className="nav-header-navigation">
                    <Link to="/">Home</Link>
                    <i className="nav-divider">|</i>
                    <Link to="/search">Search</Link>
                </div>
            </div>
        )
    }
}

export default NavHeader;