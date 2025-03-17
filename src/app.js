const express = require("express");
const { adminAuth, useAuth } = require("./middlewares/auth")

const app = express();

// Gracefully handle the error.
app.use("/", (err, req, res, next) => {
  if (err){
    res.status(500).send("something went wrong!");
  }
})

app.get("/getUserData", (req, res) => {

  try{
    throw new Error ("jhbjhsbha");
    res.send("user data send");

  }catch(err){
    res.status(500).send("Something went wrong2!");
  }
})



// app.use("/admin", adminAuth);

// app.get ("/user", useAuth, (req, res) => {
//   res.send("User data send");
// })

// app.get("/admin/getAllData", (req, res) => {
//   res.send("get all data")
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("delete user!!!!!");
// });

app.listen(7777, () => {
  console.log("Server is successfully running!");
});
