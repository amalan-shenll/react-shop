import React, { Component } from 'react';
import FeatureWidgets from './FeatueWidgets';
import Banner from './Banner';
import Products from './Products';
import Header from './header';

class Home extends Component {
  render() {
    return (
      <div className="app-home">
        <Header />
        <Banner />
        <FeatureWidgets />
        <Products />        
      </div>
    );
  }
}

export default Home;