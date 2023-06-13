"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
var bcrypt = require('bcrypt');
var User = /** @class */ (function () {
    function User(userName, password, cards) {
        var _this = this;
        bcrypt.hash(password, 10, function (err, hash) {
            return _this.hash = hash;
        });
        this.userName = userName;
        cards ? this.cards = cards : this.cards = [];
    }
    User.prototype.updateCards = function (cards) {
        this.cards = cards;
    };
    User.fromJson = function (json) {
        return Object.assign(new User(), json);
    };
    return User;
}());
exports.default = User;
exports.user = User;
