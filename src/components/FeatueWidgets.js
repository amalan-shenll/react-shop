import React, { Component } from 'react';
import '../styles/feature-widgets.scss';

class FeatureWidgets extends Component {
  render() {
    return (
      <div className="app-feature-widgets container">
        <div className="row">
          <div className="col-3">
            <div className="widget row">
              <div className="feature-icon icon-tropy">
                <i className="fa fa-trophy fa-2x" aria-hidden="true"></i>
              </div>
              <div className="feature-text">
                Smart Deals
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="widget row">
              <div className="feature-icon icon-gamepad">
                <i className="fa fa-gamepad fa-2x" aria-hidden="true"></i>
              </div>
              <div className="feature-text">
                Gadgets
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="widget row">
              <div className="feature-icon icon-cutlery">
                <i className="fa fa-cutlery fa-2x" aria-hidden="true"></i>
              </div>
              <div className="feature-text">
                Kitchenwares
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="widget row">
              <div className="feature-icon icon-music">
                <i className="fa fa-music fa-2x" aria-hidden="true"></i>
              </div>
              <div className="feature-text">
                Music Videos
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureWidgets;