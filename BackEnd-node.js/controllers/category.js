const categoryModle = require("../models/category");
const joi = require("joi");
const bcrypt = require("bcrypt");

//// POST //
const add = async (request, response) => {
  const category = request.body;
  console.log("category ::", category);

  const insertCategoryResult = await categoryModle.insertCategory(category);
  response.send(insertCategoryResult);
};

//// DELETE ///
const deleteCategory = async (request, response) => {
  const id = request.params.id;

  const deleteResult = await categoryModle.deleteCategory(id);
  response.send(deleteResult);
};

//// PUT ////
const updateCategory = async (request, response) => {
  const id = request.params.id;
  const user = request.body;
  const updateCategoryResult = await categoryModle.updateCategory(user, id);
  response.send(updateCategoryResult);
};

module.exports = {
  add,
  deleteCategory,
  updateCategory,
};
