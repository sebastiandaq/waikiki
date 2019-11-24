import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const HeaderRightLink = ({cardLength}) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><Link to="orders">Pedidos</Link></li>
          <li><Link to="cart">Carrito <span className="pull-right">{cardLength}</span></Link></li>
          <li role="separator" className="divider"></li>
          <li><Link to="/">Salir</Link></li>
        </ul>
      </li>
      <li>
          <Link to="/register">Register</Link>
      </li>
      <li>
      <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
HeaderRightLink.propTypes = {
  cardLength: PropTypes.number.isRequired
};

export default HeaderRightLink;
