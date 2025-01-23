require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("komalmeena");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at coffee and code</h1>");
});
app.get("/logout", (req, res) => {
  res.send("<h1>please logout of coffee and code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Hey There!</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`happy happy`);
});
