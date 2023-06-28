"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require('assert');
const axios = require('axios');
const fs = require('fs');
const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Database/database.sqlite'
});
class Card {
    constructor(name) {
        // Do not use without name, this ensures that the json did in fact have a name field
        assert(name != null);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static makeNft(contract) {
    }
    static fromJson(json) {
        return Object.assign(new Card(), json);
    }
}
exports.default = Card;
