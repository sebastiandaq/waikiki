
class CartController {
  // static getAllItems(req, res, next) {
  //   Cart.find().exec((err, items) => {
  //    if (err) { return next(err); }
  //    return res.json(items);
  //   });
  // }

  static getAllItems(req, res, next) {
     return res.json([]);
  }
}

export default CartController;
