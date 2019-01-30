import React, { Component } from 'react';
import './style/App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Game from './views/Game'
import HeaderBar from './components/HeaderBar'
import LeftBar from './components/LeftBar'
import store from './redux/index'
class App extends Component {
  render() {
    console.log(store.getState('deadlineReducer'))
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderBar></HeaderBar>
          <LeftBar></LeftBar>
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/games" component={Game}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
