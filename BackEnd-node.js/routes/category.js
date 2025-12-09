const express = require("express");
const router = express.Router();
const controller = require ("../controllers/category");


router.post("/add", controller.add);
router.delete("/_id=:id" , controller.deleteCategory)
router.put("/_id=:id" , controller.updateCategory)

module.exports = router ;