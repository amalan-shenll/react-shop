import React, { Component } from 'react';
import '../styles/product-detail.scss';
import defaultImg from '../images/default.jpg';
import Header from './header';

class ProductDetail extends Component {
  render() {
    return(
      <div className="app-product-detail container-fluid">
        <Header />
        <div className="row">
          <div className="col-md-4">
            <div className="product">
              <div className="card">
                <img className="card-img-top" src={defaultImg} alt="Product" />
              </div>
              <div className="product-thumnails row">
                <div className="col-4">
                  <img className="card-img-top" src={defaultImg} alt="Product" />
                </div>
                <div className="col-4">
                  <img className="card-img-top" src={defaultImg} alt="Product" />
                </div>
                <div className="col-4">
                  <img className="card-img-top" src={defaultImg} alt="Product" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="product-details">
              <h2>Sample Product</h2>
              <h4>
                <span className="badge badge-info">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>4.3</span>
                </span>
                <span className="text-muted">(43234) Ratings</span>
              </h4>
              <h3>
                <span>&#8377;</span>
                <span>499</span>
              </h3>
              <button type="button" className="btn btn-primary btn-lg">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                Add to Cart
              </button>
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Value</th>
                    <th scope="col">Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RAM</td>
                    <td>4 GB RAM | 64 GB ROM | Expandable Upto 256 GB</td>
                  </tr>
                  <tr>
                    <td>Display</td>
                    <td>15.9 cm (6.26 inch) FHD+ Display</td>
                  </tr>
                  <tr>
                    <td>Camera</td>
                    <td>12MP + 5MP | 20MP + 2MP Dual Front Camera</td>
                  </tr>
                  <tr>
                    <td>Battery</td>
                    <td>4000 mAh Li-polymer Battery</td>
                  </tr>
                  <tr>
                    <td>Processor</td>
                    <td>Qualcomm Snapdragon 636 Processor</td>
                  </tr>
                </tbody>
              </table>
              <h4>Description</h4>
              <p>
                Say hello to Redmi Note 6 Pro - Xiaomi's first smartphone that boasts an AI-powered quad-camera. Now enjoy a smart camera experience with the AI Scene Detection feature. It helps your camera understand what it is looking at and enhances the picture automatically. Take beautiful, sharp images, thanks to the Dual Pixel Autofocus technology. Its 1.4 micrometer pixel size and wider f/1.9 aperture offer you an enhanced low-light photography experience. Powered by a Qualcomm Snapdragon 636 octa-core processor and a 4000 mAh high-capacity battery, this smartphone delivers a seamless performance and up to two days of battery life.
              </p>
            </div>
          </div>
        </div>
        <div className="reviews">
          <h3>Reviews</h3>
          <div class="card review-card">
            <div class="card-body">
              <h5 class="card-title">
                <span className="badge badge-info">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>4.3</span>
                </span>
                <span>Username</span>
              </h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div class="card review-card">
            <div class="card-body">
              <h5 class="card-title">
                <span className="badge badge-info">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>4.3</span>
                </span>
                <span>Username</span>
              </h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div class="card review-card">
            <div class="card-body">
              <h5 class="card-title">
                <span className="badge badge-info">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>4.3</span>
                </span>
                <span>Username</span>
              </h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;