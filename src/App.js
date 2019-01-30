import React, { Component } from 'react';
import './style/App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Game from './views/Game'
import HeaderBar from './components/HeaderBar'
import LeftBar from './components/LeftBar'
import store from './redux/index'
import deadlineAction from './redux/actions/deadlineAction'
import { Provider, connect } from 'react-redux'
class App extends Component {
  render() {
    // const unsubscribe = store.subscribe(() => console.log(store.getState()));
    // store.dispatch(plusDeadline());
    // store.dispatch(plusDeadline());
    // store.dispatch(plusDeadline());
    // store.dispatch(minusDeadline());
    // store.dispatch(setDeadline(233));
    // unsubscribe();
    console.log()
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
