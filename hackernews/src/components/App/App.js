import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../styles/App.css';
import LinkListPage from '../Link/LinkListPage';
import CreateLink from '../Link/CreateLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LinkListPage />
        <CreateLink />
      </div>
    );
  }
}

export default App;
