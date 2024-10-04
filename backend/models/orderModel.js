const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  cartItems: {
    type: Array,
  },
  amount: {
    type: String,
  },
  status: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
