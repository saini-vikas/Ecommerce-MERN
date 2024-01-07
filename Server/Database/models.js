import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  onsale: { type: Boolean, default: false, required: true },
  description: String,
  price: {
    type: Number,
    require: true,
  },
  discountPercentage: Number,
  rating: Number,
  stock: { type: String, require: true, default: 0 },
  brand: String,
  category: {
    type: String,
    require: true,
    maxLength: 15,
  },
  thumbnail: { type: String, require: true },
  images: [{ type: String }],
});

productSchema.pre("save", function (next) {
  if (!this.onSale) {
    // Set discountPercentage to 0 only if onSale is false
    this.discountPercentage = 0;
  }
  next();
});

const Product = mongoose.model("Product", productSchema);

export default Product;
