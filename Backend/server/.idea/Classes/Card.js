"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
var Card = /** @class */ (function () {
    function Card(name) {
        // Do not use without name, this ensures that the json did in fact have a name field
        assert(name != null);
        this.name = name;
        this.makeNft();
    }
    Card.prototype.getName = function () {
        return this.name;
    };
    Card.prototype.makeNft = function () {
        console.log('nft will be made here');
    };
    Card.fromJson = function (json) {
        return Object.assign(new Card(), json);
    };
    return Card;
}());
exports.default = Card;
