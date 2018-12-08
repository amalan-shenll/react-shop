import React, { Component } from 'react';
import '../styles/products.scss';
import defaultImg from '../images/default.jpg';

class Products extends Component {
  render() {
    return(
      <div className="app-products container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="product">
              <div className="card">
                <img className="card-img-top" src={defaultImg} alt="Product" />
                <div className="card-body">
                  <h5 className="card-title text-center">Example Product</h5>
                  <h5 class="card-subtitle text-center text-info">
                    <span>&#8377;</span>
                    <span>499</span>
                  </h5>
                  <p className="card-text text-justify">
                    This is the example product given for the platform. Which is used to test and modulate.
                  </p>
                  <a href="#" class="btn btn-success btn-block">
                    View Details <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;