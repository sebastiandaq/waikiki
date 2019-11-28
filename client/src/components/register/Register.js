import React, { Component } from 'react';
import * as AuthenticationService from '../../actions/authentication';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
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
            nombre: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        };
        console.log(user);

        this.props.dispatch(AuthenticationService.registerUser(user))
        .catch((err) => {
          console.log(err);
          this.setState({ errors: err.mensaje });
          this.setState({ email: '', password: '', name: '', password_confirm: '' });
          // SOME OTHER ERROR HANDLING...
        });
    }

    render() {
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registro</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control"
                    name="name"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                    />
                </div>
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
                    <input
                    type="password"
                    placeholder="Confirmar Contraseña"
                    className="form-control"
                    name="password_confirm"
                    onChange={this.handleInputChange}
                    value={this.state.password_confirm}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary checkout-btn">
                        Registrarme
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

export default connect(mapDispatchToProps)(Register);
// export default Register;
