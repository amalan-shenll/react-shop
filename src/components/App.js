import React, { Component } from 'react';
import '../styles/App.scss';
import Routes from './routes';
import { Provider } from 'mobx-react';
import store from '../store'

class App extends Component {
  render() {
    return (
      <div className="app-react-shop">
        <Provider {...store}>
          <Routes/>
        </Provider>
      </div>
    );
  }
}

export default App;
