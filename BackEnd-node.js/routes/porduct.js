const express = require("express");
const router = express.Router();
const controllerProduct = require("../controllers/product");

router.post("/add", controllerProduct.add);
router.delete("/id:id ", controllerProduct.deleted)
router.put("/id:id ", controllerProduct.update);

module.exports = router ;