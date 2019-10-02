// App Routing: Single Page

// Get modules
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Get Components
import Home from './pages/Home';
import NavHeader from './pages/NavHeader';

// Get CSS
import './assets/css/reset.css';
import './assets/css/style.css';

// Main App compononet routing
class App extends Component {

  render() {
    return (
      <div className="app-wrapper">
        <Router>
        <NavHeader />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;