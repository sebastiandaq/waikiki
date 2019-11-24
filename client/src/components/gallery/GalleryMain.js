import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GalleryCards from './GalleryCards';
import * as itemsActions from '../../actions/itemActions';
import * as cartActions from '../../actions/cartActions';


class GalleryMain extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.addToCart = this.addToCart.bind(this);
  }

  getItemById(items, id) {
    const item = items.filter(item => item.id == id);
    if (item) return item[0];
    return null;
  }

  checkForAvailabilityInCart(cart_list, id) {
    const some_available_item = cart_list.filter(cart_item => cart_item.id == id);
    if(some_available_item.length !== 0) return true;
    else return false;
  }

  addToCart(event) {
    const _this = event.currentTarget;
    const jewelId = $(_this).attr('data-id');
    const jewelToBeAdded = this.getItemById(this.props.items, Number(jewelId));
    const item_in_gallery = this.props.items.filter(item => item.id == jewelId)[0];
    const item_in_cart = this.props.cart.filter(cart_item => cart_item.id == jewelId)[0];
    let checkForAvailabilityInCart = this.checkForAvailabilityInCart(this.props.cart, jewelId);
    if(checkForAvailabilityInCart) {
      if(item_in_cart.count < item_in_gallery.count) {
        this.props.actions.updateExistingItemInCart("add", item_in_cart);
      }
      else {
        alert("Stock not available");
      }
    }
    else {
      this.props.actions.addToCart(jewelToBeAdded);
    }
  }

  render() {
    const gallery = this.props;
    return (
      <div className="gallery-wrapper">
        <div className="container">
          <GalleryCards items={gallery.items} onAdd={this.addToCart}/>
        </div>
      </div>
    );
  }
}

GalleryMain.propTypes = {
  items: PropTypes.array.isRequired,
  cart: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    items: state.items,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},itemsActions,cartActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryMain);
