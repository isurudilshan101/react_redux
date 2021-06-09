import React, { Component } from 'react';
import {fetchPost} from '../actions/postAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button onCliick={()=>this.props.fetchPost}>Click me</button>
      </div>
    );
  }
}
function matchDispatchToProps(dispatch){
 
    return bindActionCreators({fetchPost:fetchPost},dispatch)
}


export default connect(null,matchDispatchToProps)(ButtonComponent);
