"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const assert = require("assert");
const bcrypt = require("bcrypt");
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sqlite3 = require("sqlite3").verbose();
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./Database/database.db",
});
class Inventory extends Model {
}
exports.Inventory = Inventory;
Inventory.init({
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize, modelName: "Inventory" });
