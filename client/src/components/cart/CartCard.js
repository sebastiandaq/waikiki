import React, {PropTypes} from 'react';

const CartCard = ({cart_item, onDelete, updateExistingItemInCart}) => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="cart-item">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
          <div className="cart-img-price-section">
            <div className="cart-img-container">
              <img src={"../../img/ornaments/"+cart_item.image}/>
            </div>
            <div className="cart-item-price">ARS. {cart_item.price}</div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
          <div className="cart-text-content-section">
            <div className="cart-item-title">{cart_item.title}</div>
            <div className="cart-item-description">{cart_item.description}</div>
            <div className="cart-item-numbers">x {cart_item.count}<span className="item-plus-minus-container" data-id={cart_item.id}><span className="item-plus-1 glyphicon glyphicon-plus" onClick={updateExistingItemInCart.bind(this,"add")}></span><span className="item-minus-1 glyphicon glyphicon-minus" onClick={updateExistingItemInCart.bind(this,"delete")}></span></span></div>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div className="cart-cumulative-price-section">
            <div className="cart_item_delete-container" data-id={cart_item.id} onClick={onDelete} title="Delete from cart">
              <span className="glyphicon glyphicon-trash"></span>
            </div>
            <div className="cart-cumulative-price">ARS. {cart_item.count * cart_item.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
CartCard.propTypes = {
  cart_item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  updateExistingItemInCart: PropTypes.func.isRequired
};

export default CartCard;
