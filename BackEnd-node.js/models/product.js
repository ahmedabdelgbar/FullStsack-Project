const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const connection = new MongoClient(url);
const db = connection.db("e-comm-store");
const productColl = db.collection("product");


const insertProduct = async (product) => {
  const insertResult = await productColl.insertOne(product);
  return insertResult;
};

const deleteProduct = async (id) => {
  const deleteResult = await productColl.findOneAndDelete({
    _id: new mongodb.ObjectId(id),
  });

  return deleteResult;
};

const updateProduct = async (user, id) => {
  const updateResult = await productColl.findOneAndUpdate(
    {
      _id: new mongodb.ObjectId(id),
    },
    {
      $set: {
        user: user.name,
        email: user.email,
      },
    }
  );
  return updateResult;
};

module.exports = {
  insertProduct,
  deleteProduct,
  updateProduct,
};
