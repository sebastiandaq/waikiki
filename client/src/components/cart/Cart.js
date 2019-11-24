import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';
import CartCards from './CartCards';
import CartTotal from './CartTotal';

class Cart extends React.Component {
  constructor(props, context) {
    super(props, context);

    
    this.deleteFromCart = this.deleteFromCart.bind(this); 
    this.updateExistingItemInCart = this.updateExistingItemInCart.bind(this);
  }

  deleteFromCart(event) {
    const _this = event.currentTarget;
    const item_id = $(_this).attr('data-id');
    this.props.actions.deleteFromCart(item_id);
  }

  checkForAvailability(item_id, cart_list, items_list) {
    const item_in_cart = cart_list.filter(cart_item => cart_item.id == item_id);
    const item_in_gallery = items_list.filter(item => item.id == item_id);
    if(item_in_gallery[0].count > item_in_cart[0].count) return item_in_cart[0];
    else return 0;
  }

  updateExistingItemInCart(addOrDelete, event) {
    const _this = event.currentTarget;
    const item_id = $(_this).parent().attr('data-id');
    if(addOrDelete == "add") {
      const available_stock = this.checkForAvailability(item_id, this.props.cart, this.props.items);
      if(available_stock !== 0) this.props.actions.updateExistingItemInCart(addOrDelete, available_stock);
      else alert("Stock Not Available");
    }
    else {
      const no_of_count_in_item = this.props.cart.filter(cart_item => cart_item.id == item_id);
      if(no_of_count_in_item[0].count > 1) {
        const cart_item = this.props.cart.filter(cart_item => cart_item.id == item_id)[0];
        this.props.actions.updateExistingItemInCart(addOrDelete, cart_item);
      }
      else {
        this.props.actions.deleteFromCart(item_id);
      }
    }
  }

  render() {
    return (
      <div className="cart-wrapper">
        <div className="cart-container container">
          <CartTotal cartList={this.props.cart}/>
          <CartCards cartList={this.props.cart} onDelete={this.deleteFromCart} updateExistingItemInCart={this.updateExistingItemInCart}/>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    cart: state.cart,
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
