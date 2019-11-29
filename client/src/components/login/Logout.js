import React from 'react';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthenticationService from '../../actions/authentication';
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router';

class Logout extends React.Component {
	componentDidMount() {
    this.props.dispatch(AuthenticationService.logoutUser())
    .then(() => {
      browserHistory.push('/');
    })
    .catch((err) => {
      console.log(err);
      // SOME OTHER ERROR HANDLING...
    });
	}

	render() {
    return (
      <Redirect to="/" />
    );
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthenticationService, dispatch)
  };
}
export default connect(mapDispatchToProps)(Logout);
