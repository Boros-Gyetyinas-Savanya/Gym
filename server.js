require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const path = require("path");
const fs = require("fs");

//routes
/*app.use("/trainer", require("./routes/trainerRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use("/program", require("./routes/programRoutes"));
*/
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

//models
const mongoose = require("mongoose");
/*const userModels = require("./models/felhasznalok.js");
const programModels = require("./models/edzok.js");
const trainerModels = require("./models/program.js");
*/
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    console.log("Vmi nem jó");
    return;
  }
  console.log("Sikeres");
});

//app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.render("index.ejs");
  res.send("Hello");
});

app.listen(PORT);

console.log(`listening on port http://localhost:${PORT}`);
