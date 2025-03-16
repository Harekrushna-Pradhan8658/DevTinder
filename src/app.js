const express = require('express');

const app = express();


app.use("/user",(req, res) => {
  res.send("Hello from the server!");
});

app.get("/user",(req, res) => {
  res.send({FirstName:"Harekrushna Pradhan", RollNo: "23MCA176"});
});

app.post("/user",(req, res) => {
  console.log("save data to the data base")
  res.send("data successfully saved to database");
});

app.delete("/user",(req, res) => {
  res.send("Deleted successfully!")
});



app.listen(7777, () => {
  console.log("Server is successfully running!")
});