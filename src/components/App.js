import React, { Component } from 'react';
import '../styles/App.scss';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="app-react-shop">
        <Routes/>
      </div>
    );
  }
}

export default App;
