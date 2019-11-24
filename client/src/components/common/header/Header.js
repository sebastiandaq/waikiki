import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import HeaderBrand from './HeaderBrand';
import HeaderLeftLink from './HeaderLeftLink';
import HeaderRightLink from './HeaderRightLink';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {count: 0};
    this.activateBackground = this.activateBackground.bind(this); 
    this.activateHomeBackground = this.activateHomeBackground.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let count = 0;
    nextProps.cart.map(item => {
      return count = count+item.count;
    });
    this.state = {count:count}; 
  }

  activateBackground(event) {
    const _this = event.target;
    $(_this).parents('.navbar-nav').find('li').removeClass('active');
    $(_this).parent().addClass('active');
  }

  activateHomeBackground() {
    $('.navbar-nav').find('li').removeClass('active');
    $('.home-link').addClass('active');
  }

  render() {
    return (
      <div className="zuri-header">
        <header>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <HeaderBrand activateHomeBackground={this.activateHomeBackground}/>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <HeaderLeftLink activateBackground={this.activateBackground}/>
                  <HeaderRightLink cardLength={this.state.count}/>
                </div>
              </div>
            </nav>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  cart: PropTypes.array.isRequired
  
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Header);
