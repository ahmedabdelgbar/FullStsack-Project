const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const connection = new MongoClient(url);
const db = connection.db("e-comm-store");
const categoryColl = db.collection("category");

//////////// schema /////////////////////

// const orderSchema = mongooes.Schema({
//   date: Date ,
//   items: Array(any),
//     status: Number,
// });
// const Order = mongooes.model("orders", orderSchema);

module.exports = {
  //  Order,
};
