import React, { Component } from 'react';
import * as AuthenticationService from '../../actions/authentication';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(user);

        this.props.dispatch(AuthenticationService.loginUser(user))
        .then(() => {
          browserHistory.push('/gallery');
        })
        .catch((err) => {
          console.log(err);
          this.setState({ errors: err });
          this.setState({ email: '', password: '' });
          // SOME OTHER ERROR HANDLING...
        });
    }

    render() {
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    onChange={this.handleInputChange}
                    value={this.state.email}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Contraseña"
                    className="form-control"
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary checkout-btn">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthenticationService, dispatch)
  };
}

export default connect(mapDispatchToProps)(Login);
