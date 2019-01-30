import React, { Component } from 'react';
import { connect } from 'react-redux'
import deadlineAction from '../redux/actions/deadlineAction'

const mapStateToProps = (state) => {
  return ({
    deadline: state.deadline * 1000
  })
}
const mapDispatchToProps = (dispatch) => {
  return ({
    plus() {dispatch(deadlineAction.plusDeadline())}
  })
};
const ReduxSelfButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelfButton);

function SelfButton(props) {
  console.log(props)
  return (
    <div>
      <button onClick={() => {
        props.plus()
      }}>点击{props.deadline}</button>
    </div>
  )
}
export default class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <h1>主页</h1>
        <ReduxSelfButton></ReduxSelfButton>
      </div>
    )
  }
}