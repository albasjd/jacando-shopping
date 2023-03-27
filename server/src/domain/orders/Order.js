import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
      },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
  user: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('order', OrderSchema);
