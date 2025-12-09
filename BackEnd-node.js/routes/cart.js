const express = require("express");
const router = express.Router();
const controllerCart = require("../controllers/cart");

router.post("/add", controllerCart.add);

module.exports = router ;