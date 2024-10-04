const ProductModel = require("../models/productModel");

//GET Products API - /api/v1/products
exports.getProductsController = async (req, res, next) => {
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const products = await ProductModel.find(query);

  res.json({
    success: true,
    products,
  });
};

//GET Single Product API - /api/v1/product/:id
exports.getSingleProductController = async (req, res, next) => {
  //const {id}=req.params;
  try {
    const product = await ProductModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
      // message: "it is an error!",
    });
  }
};
