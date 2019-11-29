import React, {PropTypes} from 'react';

const OrderDetails = ({order}) => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="cart-item">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
          <div className="cart-img-price-section">
            <div className="cart-item-price">Id Pedido: {order._id}</div>
          </div>
        </div>

        {order.items && order.items.length > 0 && order.items.map((item, index) => {
            return (
              <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
              <div className="cart-text-content-section">
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-description">{item.description}</div>
                <div className="cart-item-numbers">Cantidad: {item.count}</div>
              </div>
            </div>
            );
          })}

        {/* <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div className="cart-cumulative-price-section">
            <div className="cart_item_delete-container" data-id={cart_item.id} onClick={onDelete} title="Delete from cart">
              <span className="glyphicon glyphicon-trash"></span>
            </div>
            <div className="cart-cumulative-price">ARS. {cart_item.count * cart_item.price}</div>
          </div>
        </div> */}

      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  order_items: PropTypes.object.isRequired
};

export default OrderDetails;
