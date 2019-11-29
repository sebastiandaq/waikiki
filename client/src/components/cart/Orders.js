import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';
import * as CartServices from '../../api/cart';

class Orders extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions2.getUserCarts(this.props.user.user)
    .then((res) => {
      console.log(">>>>>>loading user's carts");
      this.props.orders = res.data.pedidos;
    })
    .catch((err) => {
      console.log(">>>>>>error while loading user's cartss: " + err);
    });
  }

  render() {
    return (
      <div className="cart-wrapper">
        <div className="cart-container container">
        </div>
      </div>
    );
  }
}

Orders.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    orders: state.orders,
    isAuthenticated: state.authReducer.isAuthenticated,
    user: state.authReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch),
    actions2: bindActionCreators(CartServices, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
