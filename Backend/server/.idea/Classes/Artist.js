"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const assert = require("assert");
const bcrypt = require("bcrypt");
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sendEmail_1 = require("../utils/sendEmail");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./Database/database.sqlite",
});
class Artist extends Model {
    static async register(userName, password, cards) {
        const hash = await bcrypt.hash(password, 10);
        return Artist.create({ userName: userName, hash: hash, cards: cards });
    }
    checkName(username) {
        const user = User_1.default.findone({ where: { username: username } });
        const usersCards = user.getCards().map((x) => x.artistId);
        return usersCards.contains(this.artistId);
    }
    async getUsers(tier, collection) {
        let toRet = [];
        if (collection && tier)
            return null;
        User_1.default.sync();
        if (collection) {
            let allUsers = await User_1.default.findAll();
            allUsers = allUsers.filter((user) => this.checkName(user.userName));
            allUsers.forEach((user) => {
                const allCards = user.getCards();
                if (allCards.map((x) => x.collection === collection).any()) {
                    toRet.push(user);
                }
            });
        }
        else if (tier) {
            let allUsers = await User_1.default.findAll();
            allUsers = allUsers.filter((user) => this.checkName(user.userName));
            allUsers.forEach((user) => {
                const allCards = user.getCards();
                if (allCards.map((x) => x.collection === collection).any()) {
                    toRet.push(user);
                }
            });
        }
        else {
            let allUsers = await User_1.default.findAll();
            allUsers = allUsers.filter((user) => this.checkName(user.userName));
            return allUsers;
        }
        return toRet;
    }
    async sendMail(message, users) {
        users.forEach((user) => {
            (0, sendEmail_1.sendEmail)(user.email, this.email, message);
        });
    }
}
exports.default = Artist;
Artist.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    },
}, { sequelize, modelName: "Artist" });
exports.user = Artist;
