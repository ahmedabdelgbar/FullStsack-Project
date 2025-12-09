const productModel = require("../models/product");
const joi = require("joi");
const bcrypt = require("bcrypt");
const { Schema } = require("mongoose");

const add = async (request, response) => {
  const porduct = request.body;
  console.log(":Porductadd:", porduct);

  const schema = joi.object({
    name: joi.String(),
    shotDiscription: joi.String(),
    discription: joi.String(),
    purchagePrice: joi.Number(),
    sellingPrice: joi.Number(),
    images: joi.Array(String),
    CategoryId: { type: Schema.Types.ObjectId, ref: "categories" },
  });

  const validation = Schema.validate("porducts", porduct);
  console.log("validation :: ", validation);
  if (validation.error) {
    return response.status(400).json({
      status: "error",
      msg: validation.error,
    });
  }
  
  const insertPorductResult = await productModel.insertProduct(porduct);
  response.send(insertPorductResult);
};

const deleted = async (request, response) => {
  const id = request.params.id;

  const deleteResult = await productModel.deleteUser(id);
  response.send(deleteResult);
};

const update = async (request, response) => {
  const id = request.params.id;
  const user = request.body;
  const updateCategoryResult = await productModel.updateProduct(user, id);
  response.send(updateCategoryResult);
};

module.exports = {
  add,
  deleted,
  update,
};