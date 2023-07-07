"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const fs = require("fs");
const getToken = () => {
    let token = "";
    return fs.readFile("access_token.json", "utf8", function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        }
        else {
            token = JSON.parse(data)["access_token"];
        }
        return token;
    });
};
exports.getToken = getToken;
