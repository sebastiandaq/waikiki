import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const HeaderBrand = ({activateHomeBackground}) => {
  return (
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link to="/" className="navbar-brand" onClick={activateHomeBackground}><img src="../../img/logo.png"/></Link>
    </div>
  );
};
HeaderBrand.propTypes = {
  activateHomeBackground: PropTypes.func.isRequired
};

export default HeaderBrand;
