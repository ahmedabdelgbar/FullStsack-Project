const mongodb = require ("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const connection = new MongoClient(url);
const db = connection.db("e-comm-store");
const categoryColl = db.collection("category");


const insertCategory = async (category) => {
  const insertResult = await categoryColl.insertOne(category);
  return insertResult;
};

const deleteCategory = async (id) => {
  const deleteResult = await categoryColl.findOneAndDelete({
    _id: new mongodb.ObjectId(id),
  });

  return deleteResult;
};

const updateCategory = async (user, id) => {
  const updateResult = await categoryColl.findOneAndUpdate(
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
  insertCategory,
  deleteCategory,
  updateCategory,
};