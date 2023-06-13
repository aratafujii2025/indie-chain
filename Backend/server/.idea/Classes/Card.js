"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
var API_TOKEN = require('../NFTMinting/access_token/token').getToken();
var axios = require('axios');
var fs = require('fs');
var id = fs.readFile('id.json', 'utf8', function readFileCallback(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        return JSON.parse(data)['id'];
    }
});
var config = function (data, id) {
    fs.writeFileSync(id.json, { 'id': ++id }, 'utf8', function () { });
    return {
        method: 'post',
        maxBodyLength: Infinity,
        url: "https://api-business-staging.venly.io/api/apps/3b613051-4e10-479d-a75a-ee355541e5a0/contracts/".concat(id, "/token-types"),
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
};
var Card = /** @class */ (function () {
    function Card(name, contract) {
        // Do not use without name, this ensures that the json did in fact have a name field
        assert(name != null);
        this.name = name;
        if (contract)
            Card.makeNft(contract);
    }
    Card.prototype.getName = function () {
        return this.name;
    };
    Card.makeNft = function (contract) {
    };
    Card.fromJson = function (json) {
        return Object.assign(new Card(), json);
    };
    return Card;
}());
exports.default = Card;
