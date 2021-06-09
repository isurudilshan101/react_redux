import React, { Component } from 'react';
import {fetchPost} from '../actions/postAction';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';

export default class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button>Click me</button>
      </div>
    );
  }
}
