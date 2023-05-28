"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardsDB = exports.artistDB = exports.userDB = void 0;
var Card_1 = require("../Classes/Card");
var User_1 = require("../Classes/User");
var Artist_1 = require("../Classes/Artist");
var fs = require('fs');
var cards = [];
var users = [];
var artists = [];
for (var i = 0; i < 10; i++) {
    cards.push(new Card_1.default(i.toString()));
}
// Init our database here, only one will have cards for now
var suzie = new User_1.default('suzie', '123');
var frank = new User_1.default('frank', '123');
var liz = new User_1.default('liz', '123');
var ted = new User_1.default('ted', '123');
var elk = new User_1.default('elk', '123');
elk.updateCards(__spreadArray([], cards, true));
var sia = new Artist_1.default('sia', '123');
var taylor = new Artist_1.default('taylor', '123');
users.push(JSON.stringify(suzie));
users.push(JSON.stringify(frank));
users.push(JSON.stringify(liz));
users.push(JSON.stringify(ted));
users.push(JSON.stringify(elk));
artists.push(JSON.stringify(sia));
artists.push(JSON.stringify(taylor));
var jsonCards = JSON.stringify(cards);
exports.userDB = { 'users': users };
exports.artistDB = { 'artists': artists };
exports.cardsDB = { 'cards': cards };
fs.writeFileSync('userDB.json', JSON.stringify(exports.userDB));
fs.writeFileSync('cardsDB.json', JSON.stringify(exports.cardsDB));
fs.writeFileSync('artistsDB.json', JSON.stringify(exports.artistDB));
