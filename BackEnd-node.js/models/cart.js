const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const connection = new MongoClient(url);
const db = connection.db("e-comm-store");
const cartColl = db.collection("cart");


////// add ////

const insertCart = async (cart) =>{
  const cartResult = await cartColl.insertOne(cart);
  return cartResult;
};


module.exports = {
  insertCart,
};



