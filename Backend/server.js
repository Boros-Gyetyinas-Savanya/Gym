require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const path = require("path");
const fs = require("fs");
const cors = require("cors");

//routes
app.use("/trainer", require("./routes/trainerRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use("/program", require("./routes/programRoutes"));
app.use("/feature", require("./routes/featureRoutes"));

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

//models
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    console.log("Vmi nem jó");
    return;
  }
  console.log("Sikeres");
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.render("index.ejs");
  res.send("Hello");
});

app.post("/", async (rea, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await mongoose.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await mongoose.insertMany({ data });
    }
  } catch {
    res.json("notexist");
  }
});

app.listen(PORT);

console.log(`listening on port http://localhost:${PORT}`);
