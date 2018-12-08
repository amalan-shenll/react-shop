import React, { Component } from 'react';
import shopIcon from '../images/shop.png';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img src={shopIcon} width="30" height="30" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-laptop" aria-hidden="true"></i> Electronics
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Mobiles</a>
                  <a className="dropdown-item" href="#">Laptops</a>
                  <a className="dropdown-item" href="#">Trimmers</a>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-television" aria-hidden="true"></i> Home Appliances
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Refrigerator</a>
                  <a className="dropdown-item" href="#">Washing Machines</a>
                  <a className="dropdown-item" href="#">Smart TVs</a>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-futbol-o" aria-hidden="true"></i> Sports
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Shoes</a>
                  <a className="dropdown-item" href="#">Dumbells</a>
                  <a className="dropdown-item" href="#">Trademills</a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a class="nav-link" href="#">
                  <i className="fa fa-search text-info" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  <i className="fa fa-heart text-danger" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  <i className="fa fa-shopping-cart text-warning" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="" data-toggle="modal" data-target="#loginModal">
                  <i className="fa fa-user" aria-hidden="true"></i> Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;