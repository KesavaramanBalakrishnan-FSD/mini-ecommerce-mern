const OrderModel = require("../models/orderModel");
const ProductModel = require("../models/productModel");

//Create Order - POST api - /api/v1/order
exports.createOrder = async (req, res, next) => {
  try {
    const cartItems = req.body;

    const amount = Number(
      cartItems
        .reduce(
          (acc, item) =>
            acc + parseFloat(item.product.price) * parseInt(item.quantity),
          0
        )
        .toFixed(2)
    );

    const status = "pending";

    const order = await OrderModel.create({
      cartItems,
      amount,
      status,
    });

    //updating product stock in the database in product collection
    cartItems.forEach(async (item) => {
      const product = await ProductModel.findById(item.product._id);
      product.stock = product.stock - item.quantity;
      await product.save();
    });

    res.json({
      sucess: true,
      order,
    });
  } catch (error) {
    console.log(error);
  }
};
