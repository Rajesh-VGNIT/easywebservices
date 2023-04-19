const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Connection local mongodb

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/logindata");
//   console.log("db connected");
// }

// Connection mongoDB atlas

const { MongoClient } = require("mongodb");

async function run() {
  // TODO:
  // Replace the placeholder connection string below with your
  // Altas cluster specifics. Be sure it includes
  // a valid username and password! Note that in a production environment,
  // you do not want to store your password in plain-text here.
  const uri =
    "mongodb+srv://other-user:otheruser35@cluster0.0fgqy.mongodb.net/?retryWrites=true&w=majority/easywebservices";

  // The MongoClient is the object that references the connection to our
  // datastore (Atlas, for example)
  const client = new MongoClient(uri);

  // The connect() method does not attempt a connection; instead it instructs
  // the driver to connect using the settings provided when a connection
  // is required.
  await client.connect();

  // Provide the name of the database and collection you want to use.
  // If the database and/or collection do not exist, the driver and Atlas
  // will create them automatically when you first write data.
  const dbName = "easywebservices";
  const collectionName = "users";

  console.log('mongodb connected...');

  // Create references to the database and collection in order to run
  // operations on them.
  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  /*
   *  *** INSERT DOCUMENTS ***
   *
   * You can insert individual documents using collection.insert().
   * In this example, we're going to create four documents and then
   * insert them all in one call with collection.insertMany().
   */

  // ** run only one time
  // const users = [
  //   {
  //     username: "vipul",
  //     password: "12345",
  //   },
  //   {
  //     username: "rajesh",
  //     password: "12345",
  //   },
  //   {
  //     username: "amit",
  //     password: "12345",
  //   },
  // ];

  // try {
  //   const insertManyResult = await collection.insertMany(users);
  //   console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
  // } catch (err) {
  //   console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  // }

  /*
   * *** FIND DOCUMENTS ***
   *
   * Now that we have data in Atlas, we can read it. To retrieve all of
   * the data in a collection, we call Find() with an empty filter.
   * The Builders class is very helpful when building complex
   * filters, and is used here to show its most basic use.
   */

  const findQuery = { username: { $eq: "vipul" } };

  try {
    const cursor = await collection.find(findQuery).sort({ name: 1 });
    await cursor.forEach((user) => {
      console.log(`${user.name}`);
    });
    // add a linebreak
    console.log();
  } catch (err) {
    console.error(
      `Something went wrong trying to find the documents: ${err}\n`
    );
  }

  // We can also find a single document. Let's find the first document
  // that has the string "potato" in the ingredients list.
  const findOneQuery = { username: "rajesh" };

  try {
    const findOneResult = await collection.findOne(findOneQuery);
    if (findOneResult === null) {
      console.log("Couldn't find any user.\n");
    } else {
      console.log(`Found a user:\n${JSON.stringify(findOneResult)}\n`);
    }
  } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
  }

  /*
   * *** UPDATE A DOCUMENT ***
   *
   * You can update a single document or multiple documents in a single call.
   *
   * Here we update the PrepTimeInMinutes value on the document we
   * just found.
   */
  const updateDoc = { $set: { username: "Rajesh" } };

  // The following updateOptions document specifies that we want the *updated*
  // document to be returned. By default, we get the document as it was *before*
  // the update.
  const updateOptions = { returnOriginal: false };

  try {
    const updateResult = await collection.findOneAndUpdate(
      findOneQuery,
      updateDoc,
      updateOptions
    );
    console.log(
      `Here is the updated document:\n${JSON.stringify(updateResult.value)}\n`
    );
  } catch (err) {
    console.error(
      `Something went wrong trying to update one document: ${err}\n`
    );
  }

  /*      *** DELETE DOCUMENTS ***
   *
   *      As with other CRUD methods, you can delete a single document
   *      or all documents that match a specified filter. To delete all
   *      of the documents in a collection, pass an empty filter to
   *      the DeleteMany() method. In this example, we'll delete two of
   *      the recipes.
   */

  const deleteQuery = { name: { $in: ["elotes", "fried rice"] } };
  try {
    const deleteResult = await collection.deleteMany(deleteQuery);
    console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
  } catch (err) {
    console.error(`Something went wrong trying to delete documents: ${err}\n`);
  }

  // Make sure to call close() on your client to perform cleanup operations
  await client.close();
}
run().catch(console.dir);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post("/user", async (req, res) => {
  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  const doc = await user.save();

  console.log(doc);
  res.json(doc);
});

server.get("/user", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

server.put("/user/:id", async (req, res) => {
  const doc = await User.findOneAndReplace(
    { _id: req.params.id },
    { $set: { username: req.body.username } },
    {
      new: true,
    }
  ).then((doc) => {
    res.json(doc);
  });
});

server.delete("/user/:id", async (req, res) => {
  const doc = await User.findByIdAndDelete({ _id: req.params.id });
  res.json(doc);
});

// server.delete("/logindata/:id", async (req, res) =>{
//   const doc = await User.findOne({ _id: req.params.id }).then((doc) => {
//      res.json(doc);
//    });
//  });

server.listen(8081, () => {
  console.log("server started");
});
