const {
  getProductsController,
  getSingleProductController,
} = require("../controllers/productController");

const express = require("express");

const router = express.Router();

router.route("/products").get(getProductsController);
router.route("/product/:id").get(getSingleProductController);

module.exports = router;
