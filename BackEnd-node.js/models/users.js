const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const connection = new MongoClient(url);
const db = connection.db("e-comm-store");
const userColl = db.userColl("users");

///////// schema //////////
// const userSchema = mongooes.Schema ({
//     name : String ,
//     email : String ,
//     password : String,
//     isAdmin : Boolean,
// });
// const User = mongooes.model( 'users' , userSchema);

// const insertUser = async (user) => {
//   const insertRuselt = await userColl.insertOne(user);
//   return insertRuselt;
// };

insertUser = async (user) => {
    insertUserResult = await userColl.insertOne(user);
    return insertUserResult;
};

module.exports = {
    insertUser,
};