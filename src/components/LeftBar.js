import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { title: '主页', link: '/' },
        { title: '新闻', link: '/news' },
        { title: '游戏', link: '/games' },
        { title: '工作', link: '/works' },
      ],
    };
  }
  render() {
    return (
      <div className="leftbar">
        <ul>
          { this.state.list.map(item => (
            <li key={item.title}>
              <NavLink to={item.link} exact>{item.title}</NavLink>
            </li>
          )) }
        </ul>
      </div>
    )
  }
}