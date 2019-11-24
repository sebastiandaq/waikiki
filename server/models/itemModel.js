import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  count: Number
}, { collection : 'gallery' });

export default mongoose.model('gallery', itemSchema);
