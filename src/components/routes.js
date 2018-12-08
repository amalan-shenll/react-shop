import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';
import Home from './Home';
import LoginModal from './login-modal';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <LoginModal />
        </div>
      </Router>
    );
  }
}

export default Routes;
