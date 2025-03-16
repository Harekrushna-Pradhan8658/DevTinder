const express = require('express');

const app = express();

app.use("/user", 
[(req, res, next) => {
  console.log("handle");
  next();
  // res.send("handle"); 
},
(req, res, next) => {
  // res.send("second handle")
  next();
},
(req, res, next) => {
  // res.send("third handle")
  next();
},
(req, res) => {
  res.send("fourth handle")
}]
);

app.listen(7777, () => {
  console.log("Server is successfully running!")
});