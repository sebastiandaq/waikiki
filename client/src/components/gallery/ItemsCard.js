import React,{PropTypes} from 'react';
const ItemsCard = ({jewel, onAdd, canConsume}) => {
  let jewelDescription = jewel.description;
  let availablity;
  if(jewelDescription.length > 60) {
    jewelDescription = jewelDescription.substring(0, 60) + "...";
  }
  if(jewel.count !== 0) availablity = true;
  else availablity = false;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="item-card">
        <div className="item-title">{jewel.title}</div>
        <div className={!availablity ? "item-card-container empty": "item-card-container"}>
          <div className="item-card-img-section">
            <img src={"../../img/ornaments/"+jewel.image}/>
          </div>
          <div className="item-card-content-section">
            <div className="item-price">ARS. {jewel.price}</div>
            {canConsume &&
              <div className={!availablity ? "item-stock disable": "item-stock"} data-id={jewel.id} onClick={onAdd} title="Add to cart">
                {availablity && <span className="glyphicon glyphicon-shopping-cart"></span>}
              </div>
            }
            <div className="item-description">{jewelDescription}</div>
          </div>
        </div>
        {!availablity && <div className="stock-unavailable">Sin stock</div>}
      </div>
    </div>
  );
};
ItemsCard.propTypes = {
  jewel: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default ItemsCard;
