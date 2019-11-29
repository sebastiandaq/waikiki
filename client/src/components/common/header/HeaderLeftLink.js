import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const HeaderLeftLink = ({activateBackground, isAuthenticated}) => {
  return (
    <ul className="nav navbar-nav">
      <li className="active home-link"><Link to="/" onClick={activateBackground}>Inicio <span className="sr-only">(current)</span></Link></li>
      {isAuthenticated &&
        <li className="gallery-link"><Link to="/gallery" onClick={activateBackground}>Catalogo de productos</Link></li>
      }
      <li className="contact-link"><Link to="/contact" onClick={activateBackground}>Contactanos</Link></li>
      <li className="contact-link"><Link to="/about" onClick={activateBackground}>Acerca</Link></li>
    </ul>
    // Agregar el About
  );
};
HeaderLeftLink.propTypes = {
  activateBackground: PropTypes.func.isRequired
};

export default HeaderLeftLink;
