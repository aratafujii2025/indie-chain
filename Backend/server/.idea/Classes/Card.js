"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const axios = require("axios");
const fs = require("fs");
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./Database/database.sqlite",
});
class Card extends Model {
    getName() {
        return this.name;
    }
    static makeNft(contract) {
        Card.create(contract);
    }
    static fromJson(json) {
        return Object.assign(new Card(), json);
    }
}
exports.default = Card;
Card.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    madeAs: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagePath: {
        type: DataTypes.STRING,
    },
    currentAddress: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    contractDescription: {
        type: DataTypes.STRING,
    },
    artistId: {
        type: DataTypes.INTEGER,
    },
    tier: {
        type: DataTypes.STRING,
    },
    collection: {
        type: DataTypes.STRING,
    },
}, { sequelize, modelName: "Card" });
