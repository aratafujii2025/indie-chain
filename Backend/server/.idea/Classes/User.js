"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
var User = /** @class */ (function () {
    function User(userName, password, cards) {
        assert(userName != null);
        assert(password != null);
        this.userName = userName;
        this.password = password;
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
