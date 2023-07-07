"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = __importDefault(require("./Card"));
const assert = require("assert");
const bcrypt = require("bcrypt");
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("database.sqlite", sqlite3.OPEN_READWRITE);
db.run("CREATE TABLE IF NOT EXISTS CardOwner(User varchar(255),CardHash int, Quantity int, primary key (User,CardHash));");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./Database/database.sqlite",
});
class User extends Model {
    static async register(userName, password, cards) {
        const hash = await bcrypt.hash(password, 10);
        if (User.findOne({ where: { userName: userName } })) {
            return "a user exists with that name";
        }
        return User.create({ userName: userName, hash: hash, cards: cards });
    }
    getCards() {
        const cardHashes = db.run(`select CardHash from CardOwner where User == ${this.username};`);
        return Card_1.default.findAll({
            where: {
                hash: {
                    [Op.in]: cardHashes,
                },
            },
        });
    }
}
exports.default = User;
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    },
    wallet: {
        type: DataTypes.INTEGER,
    },
}, { sequelize, modelName: "User" });
exports.user = User;
