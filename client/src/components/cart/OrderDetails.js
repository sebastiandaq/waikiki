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


        <div className="col-lg-7 col-md-7">
          <div className="cart-text-content-section">
            {order.items && order.items.length > 0 && order.items.map((item, index) => {
              return (
                <div className="order-item">
                  <div className="order-item-title">{item.title}</div>
                  <div className="order-item-description">{item.description} - Cantidad: {item.count} - Precio Unitario: {item.price}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  order_items: PropTypes.object.isRequired
};

export default OrderDetails;
