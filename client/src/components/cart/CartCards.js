import React,{PropTypes} from 'react';
import CartCard from './CartCard';

const CartCards = ({cartList, onDelete, updateExistingItemInCart}) => {
  return (
    <div className="cart-card-wrapper">
      <div className="row">
      {cartList.map(cart_item =>
        <CartCard key={cart_item.id} cart_item={cart_item} onDelete={onDelete} updateExistingItemInCart={updateExistingItemInCart}/>
      )}
      </div>
    </div>
  );
};
CartCards.propTypes = {
  cartList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  updateExistingItemInCart: PropTypes.func.isRequired
};

export default CartCards;
