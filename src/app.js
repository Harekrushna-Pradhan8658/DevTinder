const express = require("express");
const { adminAuth, useAuth } = require("./middlewares/auth");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Sachin",
    lastName: "Tendulkar",
    email:"sachin@gmail.com",
    password:"sachin10@234",
  });

  try{
    await user.save();
    res.send("user added successfully!!!!");
  }catch(err){
    res.status(400).send("Error saving the user:"+ err.message);
  }

});


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
