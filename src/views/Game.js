import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'

class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameInfos: {
        'hollow': {
          name: 'Hollow Knight',
          info: '空洞骑士',
        },
        'celeste': {
          name: 'Celeste',
          info: '蔚蓝',
        },
        'dead': {
          name: 'Dead Cells',
          info: '死亡细胞',
        },
        'ori': {
          name: 'Ori and the Blind Forest',
          info: '奥里与迷失森林',
        },
      }
    }
  }
  render() {
    let name = this.props.match.params.name;
    let gameName = this.state.gameInfos[name].name;
    let gameInfo = this.state.gameInfos[name].info;
    return (
      <div className="game__info">
        <h2>{ gameName }</h2>
        <p>{ gameInfo }</p>
      </div>
    )
  }
}

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { name: '空洞骑士', link: '/hollow' },
        { name: '蔚蓝', link: '/celeste' },
        { name: '死亡细胞', link: '/dead' },
        { name: '奥里与迷失森林', link: '/ori' },
      ],
    }
  }
  render() {
    let list = this.state.list;
    let url = this.props.match.url;
    return (
      <div className="page-game">
        <h1>游戏</h1>
        <ul className="game__list">
          {
            list.map(item => (
              <li key={item.name}>
                <NavLink to={`${url}${item.link}`}>{ item.name }</NavLink>
              </li>
            ))
          }
        </ul>
        <div className="clear"></div>
        <Switch>
          <Route path="/games/:name" component={GameInfo}></Route>
        </Switch>
      </div>
    )
  }
}