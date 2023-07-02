"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const bcrypt = require("bcrypt");
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./Database/database.sqlite",
});
class Artist extends Model {
  static async register(userName, password, cards) {
    const hash = await bcrypt.hash(password, 10);
    return Artist.create({ userName: userName, hash: hash, cards: cards });
  }
}
exports.default = Artist;
Artist.init(
  {
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
  },
  { sequelize, modelName: "Artist" }
);
exports.user = Artist;
