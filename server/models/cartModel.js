import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const itemCartSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  category: String
});

const cartSchema = new Schema({
  userId: String,
  items: [itemCartSchema]
}, { collection : 'cart' });

cartSchema.set('timestamps', true);

const Pedido = mongoose.model('Pedido', cartSchema);

module.exports = Pedido;
