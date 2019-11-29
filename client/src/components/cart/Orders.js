import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';
import * as CartServices from '../../api/cart';
import OrderDetails from '../cart/OrderDetails';
import { browserHistory } from 'react-router';

class Orders extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      orders: this.props.orders
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated === false) {
      browserHistory.push('/');
   } else {
      this.props.actions2.getUserCarts(this.props.user.user)
      .then((res) => {
        console.log(">>>>>>loading user's carts");
        this.setState({ orders: res.data.pedidos });
      })
      .catch((err) => {
        console.log(">>>>>>error while loading user's cartss: " + err);
      });
    }
  }

  render() {

    if (this.props.isAuthenticated === false) {
      browserHistory.push('/');
   }

    const { orders } = this.state;

    return (
      <div className="cart-wrapper">
        <div className="cart-container container">
          {orders && orders.length > 0 && orders.map((order, index) => {
            return (
              <OrderDetails order={order}/>
            );
          })}
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
