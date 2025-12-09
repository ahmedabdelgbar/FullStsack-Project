const cartModle = require("../models/cart");
const joi = require("joi");
const bcrypt = require("bcrypt");

const add = async (request, response) => {
  const cart = request.body;
  console.log("cart ::", cart);

  const cartSchema = mongooes.Schema({
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    prodcutsID: Array(String),
  });
  const Cart = mongooes.model("carts", cartSchema);


  const insertCartResult = await cartModle.insertCart(cart);
  response.send(insertCartResult);
};

module.exports = {
  add,
};


