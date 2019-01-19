import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import ProductDetail from './product-detail';
import LoginModal from './login-modal';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" component={ProductDetail} />
          </Switch>
          <LoginModal />
        </div>
      </Router>
    );
  }
}

export default Routes;
