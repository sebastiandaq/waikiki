import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './common/header/Header';

class App extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state={
      sesionOK: JSON.parse(localStorage.getItem('sesionOK')) || false,
      userData: JSON.parse(localStorage.getItem('userData')) || {},
      login:false,
      register:false,
      error:null,
      token:null
    }
  }

  render() {
    return (
      <div className="zuri-wrapper">
      <Header/>

      {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect()(App);
