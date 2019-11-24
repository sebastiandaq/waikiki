import React,{PropTypes} from 'react';
import ItemsCard from './ItemsCard';
const GalleryCards = ({items,onAdd}) => {
  return (
    <div className="card-wrapper">
      <div className="row">
        {items.map(item =>
          <ItemsCard key={item.id} jewel={item} onAdd={onAdd}/>
        )}
      </div>
    </div>
  );
};
GalleryCards.propTypes = {
  items: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default GalleryCards;
