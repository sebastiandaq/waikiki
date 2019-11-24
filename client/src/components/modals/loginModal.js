import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBRow, MDBCol } from 'mdbreact';

class ModalLogin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: '',
      datosUsuario: {},
      showAlert:false
    };
  }

  handleInputChange(event){
    let { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit(event){
    event.preventDefault();
    fetch('http://localhost:5000/usuarios/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.toggle('login');
        //console.log(res);
        res.json().then((respuesta)=>{
          this.setState({datosUsuario: {nombreUsuario:respuesta.usuario.nombre,emailUsuario: respuesta.usuario.email, tokenUsuario: respuesta.token}});
          this.props.onLoginSuccess(this.state.datosUsuario);
          localStorage.setItem('usuario', JSON.stringify(respuesta.usuario.email));
          this.setState({password:"",email:""})
        });
        //console.log(this.state.nombreUsuario);
      } else {
        this.props.toggle('alertaLogin');
      }
    })
    .catch(err => {
      //console.error(err);
      this.props.toggle('alertaLogin');
    });
  }

  render() {
    return (
      <MDBContainer>
      <MDBModal isOpen={this.props.login} toggle={this.props.toggle} side fullHeight position="right">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form onSubmit={this.onSubmit}>
              <p className="h4 text-center mb-4 mt-4">Ingresar</p>
              <label htmlFor="email" className="grey-text">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="form-control border-0 bg-light" required
              />
              <br />
              <label htmlFor="password" className="grey-text">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control border-0 bg-light" required
              />
              <div className="text-center mt-4">
                <MDBBtn className="btn-block btn buy mb-4" color="success" type="submit">Ingresar</MDBBtn>
                <MDBBtn className="btn-block btn danger mb-4" color="danger" onClick={() => this.props.toggle('login')}>Cancelar</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
      </MDBModal>
    </MDBContainer>
    );
  }
}
export default ModalLogin;