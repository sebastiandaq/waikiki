import React,{PropTypes} from 'react';


const CartTotal = ({cartList, onConfirm}) => {
  const totalItems = () => {
    let totalItems = 0;
    cartList.map(cart_item => {
      totalItems = totalItems+cart_item.count;
    });
    return totalItems;
  };

  const totalCost = () => {
    let totalCost = 0;
    cartList.map(cart_item => {
      totalCost = totalCost+(cart_item.price*cart_item.count);
    });
    return totalCost;
  };

  return (
    <div className="cart-total-card-wrapper">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="cart-item">
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <div className="cart-img-price-section">
                <div className="cart-img-container">
                  <img src={"../../img/logo_square.png"}/>
                </div>
                <div className="cart-item-price">TOTAL {totalItems > 1 ? "ITEMS" : "ITEM"}&nbsp; &nbsp; &nbsp; {totalItems()}</div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
              <div className="items-ordered"></div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="checkout-btn" onClick={onConfirm}>CONFIRMAR</div>
              <div className="cart-total-price">
                ARS. {totalCost()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartTotal.propTypes = {
  cartList: PropTypes.array.isRequired
};

export default CartTotal;
