import Cart from '../models/cartModel';
class CartController {
  static getAllItems(req, res, next) {
    Cart.find().exec((err, items) => {
     if (err) { return next(err); }
     return res.json(items);
    });
  }
}

export default CartController;
