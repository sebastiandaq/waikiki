import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  count: Number
}, { collection : 'cart' });

export default mongoose.model('cart', cartSchema);
