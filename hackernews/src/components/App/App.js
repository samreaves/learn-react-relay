import React, { Component } from 'react';
import '../../styles/App.css';
import LinkListPage from '../Link/LinkListPage';
import CreateLink from '../Link/CreateLink';
import Header from '../Header/Header';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' component={LinkListPage} />
            <Route exact path='/create' component={CreateLink} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
