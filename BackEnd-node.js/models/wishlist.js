const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const connection = new MongoClient(url);
const db = connection.db("e-comm-store");
const userColl = db.userColl("wishlist");

//////// schema ////////
// const wishlistSchema = mongooes.Schema({
//   userId: { type: Schema.Types.ObjectId, ref: "users" },
//   prodcutsID: Array(String),
// });
// const Wishlist = mongooes.model("wishlists", wishlistSchema);


module.exports = {
    
};
