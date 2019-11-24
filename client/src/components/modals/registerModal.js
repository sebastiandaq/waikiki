import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBRow, MDBCol } from 'mdbreact';

class ModalRegistro extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nombre:'',
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
    fetch('http://localhost:5000/usuarios', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.toggle('registro');
        //console.log(res);
        res.json().then((respuesta)=>{
          this.setState({datosUsuario: {nombreUsuario:respuesta.usuario.nombre,emailUsuario: respuesta.usuario.email, tokenUsuario: respuesta.token}});
          this.props.onLoginSuccess(this.state.datosUsuario);
          localStorage.setItem('usuario', JSON.stringify(respuesta.usuario.email));
        });
        //console.log(this.state.nombreUsuario);
      } else {
        //let error = new Error(res.error);
        this.props.toggle('alertaRegistro');
        //throw error;
      }
    })
    .catch(err => {
      //console.error(err);
      //alert('Al registrarse.')
      this.props.toggle('alertaRegistro');
    });
  }

  render() {
    return (
      <MDBContainer>
      <MDBModal isOpen={this.props.registro} toggle={this.props.toggle} side fullHeight position="right">
        <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form onSubmit={this.onSubmit}>
            <p className="h4 text-center mb-4 mt-4">Registro</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Nombre Completo
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              name="nombre"
              className="form-control"
              onChange={this.handleInputChange}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              onChange={this.handleInputChange}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              onChange={this.handleInputChange}
            />
              <div className="text-center mt-4">
                <MDBBtn className="btn-block btn buy mb-4" color="success" type="submit">Registro</MDBBtn>
                <MDBBtn className="btn-block btn danger mb-4" color="danger" onClick={() => this.props.toggle('registro')}>Cancelar</MDBBtn>
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
export default ModalRegistro;