const express = require("express");
const authController = require("../controllers/authController");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.post("/login", authController.loginBumbleBee);
router.post("/order", orderController.createOrder);

module.exports = router;
