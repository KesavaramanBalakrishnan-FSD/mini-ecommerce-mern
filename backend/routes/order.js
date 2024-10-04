const { createOrder } = require("../controllers/orderController");

const express = require("express");

const router = express.Router();

router.route("/order").post(createOrder);

module.exports = router;
