import React, { Component } from 'react';
import '../styles/App.scss';
import Header from './header';
import LoginModal from './login-modal';

class App extends Component {
  render() {
    return (
      <div className="app-react-shop">
        <Header />
        <LoginModal />
        <h3><i className="fa fa-tachometer" aria-hidden="true"></i>React Shop</h3>
      </div>
    );
  }
}

export default App;
