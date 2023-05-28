"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
var Artist = /** @class */ (function () {
    function Artist(userName, password) {
        assert(userName != null);
        assert(password != null);
        this.userName = userName;
        this.password = password;
    }
    Artist.prototype.makeCard = function () {
        console.log('card successfully made');
    };
    Artist.fromJson = function (json) {
        // To use, call artist.from with a json that has userName and password fields
        return Object.assign(new Artist(), json);
    };
    return Artist;
}());
exports.default = Artist;
