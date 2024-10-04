const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ratings: {
    type: String,
    required: true,
  },
  images: [
    {
      image: String,
    },
  ],
  category: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  numOfReviews: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
