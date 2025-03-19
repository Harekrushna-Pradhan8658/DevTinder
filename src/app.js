const express = require("express");
const { adminAuth, useAuth } = require("./middlewares/auth");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json()); //middleware -> convert json data to js.object

app.post("/signup", async (req, res) => {
  console.log(req.body);
  //Creating a new instance of the User model
  const users = new User(req.body);

  try {
    await users.save();
    res.send("user added successfully!!!!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// user API - get the matching(one/more by emailId) user from the database.
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.findOne({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found!");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

// Feed API - GET/feed - get all the user from the database.
app.get("/feed", async (req, res) => {

 try{
  const users = await User.find({});
  res.send(users);
 }
 catch(err){
  res.status(400).send("Something went wrong!");
 }

});

// Delete data of the user
app.delete("/user", async (req, res) => {
  console.log(req.body)
  const Id = req.body.userId;

  try{
    const users = await User.findByIdAndDelete({_id:Id}); 
    // const users = await User.findByIdAndDelete(userId);   we can use this or the line no.56 one.
    res.send("user delete successfully");
   }
   catch(err){
    res.status(400).send("Something went wrong!");
   }
})

// Update data of the user
app.patch("/user", async (req, res) => {
    const data = req.body;
    const Id = req.body.userId;

    try{
      const before = await User.findByIdAndUpdate(Id, data, {returnDocument: 'before'});
      console.log(before);
      res.send("User updated successfully!")
    }
    catch(err){
      res.status(400).send("Something went wrong!");
    }
})

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully running!");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected...");
  });
