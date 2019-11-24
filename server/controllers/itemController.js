import Items from '../models/itemModel';

class ItemController {
  static getAllItems(req, res, next) {
    Items.find().exec((err, items) => {

      if (err) { return next(err); }
      return res.json(items);
    });
  }
}

export default ItemController;
