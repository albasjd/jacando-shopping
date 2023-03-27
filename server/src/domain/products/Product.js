import mongoose from 'mongoose';

const Categories = ['vegetables', 'fruits', 'cheese'];

const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  category: { type: String, required: true, enum: Categories },
  price: { type: Number, required: true, min: 0 },
  stockAvailable: { type: Number, required: true, min: 0 },
});

export default mongoose.model('product', ProductSchema);
