"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require('assert');
const bcrypt = require('bcrypt');
class User {
    constructor(userName, password, cards) {
        this.userName = userName;
        this.hash = password;
        this.cards = cards;
    }
    updateCards(cards) {
        this.cards = cards;
    }
    static fromJson(json) {
        return Object.assign(new User(), json);
    }
    static async register(userName, password, cards) {
        const hash = await bcrypt.hash(password, 10);
        return new User(userName, hash, cards);
    }
}
exports.default = User;
exports.user = User;
