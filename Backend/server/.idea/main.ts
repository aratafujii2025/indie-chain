const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
import Card from "./Classes/Card";
import User from "./Classes/User";
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
import { updateDatabase } from "./Database/UpdateDatabase";
import { sendEmail } from "./utils/sendEmail";
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/login", async (req, res) => {
  let data = req.body;
  await User.sync();
  await updateDatabase();
  const user = await User.findOne({ where: { userName: data.username } });
  if (!user) {
    res.status(400).send("User could not be found");
  } else {
    const passwordsMatch = await bcrypt.compare(data.password, user.hash);
    if (passwordsMatch) {
      res.json({ msg: "user entered correct password!" });
    } else {
      res.status(400).send("User entered incorrect password");
    }
  }
});

app.post("/register", async (req, res) => {
  let data = req.body;
  await User.sync();
  await updateDatabase();
  if (
    (await User.register(data.username, data.password)) ==
    "a user exists with that name"
  ) {
    res.status(400).send("A user already exists with that name");
  }
  res.status(200).send("User was created");
});

app.post("/create", async (req, res) => {
  let data = req.body;
  await updateDatabase();
  await Card.sync();
  await Card.makeNft(data);
  res.json({ msg: "success" });
});

app.post("/email", (req, res) => {
  let data = req.body;
  if (sendEmail(data["subject"], data["to"], data["content"])) {
    res.status(400);
    res.json({
      msg: "there was an error sending the email, please try again later",
    });
  } else {
    res.json({ msg: "email sent" });
  }
});

app.listen(port, () => {
  console.log("server running");
});
