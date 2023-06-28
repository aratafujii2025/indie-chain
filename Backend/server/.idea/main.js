"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const User_1 = __importDefault(require("./Classes/User"));
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send('hi');
});
app.post("/login", async (req, res) => {
    let data = req.body;
    await User_1.default.sync();
    const user = await User_1.default.findOne({ where: { 'userName': data.username } });
    if (!user) {
        res.json({ 'msg': 'could not find user' });
    }
    else {
        const passwordsMatch = await bcrypt.compare(data.password, user.hash);
        if (passwordsMatch) {
            res.json({ 'msg': 'user entered correct password!' });
        }
        else {
            res.json({ 'msg': 'password was incorrect' });
        }
    }
});
app.post("/register", async (req, res) => {
    let data = req.body;
    await User_1.default.sync();
    await User_1.default.register(data.username, data.password);
    res.json({ 'msg': 'success' });
});
app.listen(port, () => {
    console.log('server running');
});
