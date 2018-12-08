import React, { Component } from 'react';
import FeatureWidgets from './FeatueWidgets';
import Banner from './Banner';
import Products from './Products';

class Home extends Component {
  render() {
    return (
      <div className="app-home">
        <Banner />
        <FeatureWidgets />
        <Products />        
      </div>
    );
  }
}

export default Home;