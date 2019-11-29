import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './common/header/Header';

class App extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state={
      sesionOK: this.props.isAuthenticated,
      userData: this.props.user || {},
      login:false,
      register:false,
      error:null,
      token:null
    };
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

const mapStateToProps = state => ({
	isAuthenticated: state.authReducer.isAuthenticated,
	user: state.authReducer.user
});

export default connect(mapStateToProps)(App);
