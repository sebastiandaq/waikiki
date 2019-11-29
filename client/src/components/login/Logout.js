import React from 'react';
import { connect } from 'react-redux';
import * as AuthenticationService from '../../api/authentication';
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
    });
	}

	render() {
    return (
      <div></div>
    );
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthenticationService, dispatch)
  };
}
export default connect(mapDispatchToProps)(Logout);
