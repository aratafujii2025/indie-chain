import Card from "./Card";
const assert = require("assert");
const bcrypt = require("bcrypt");
const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./Database/database.sqlite",
});
export default class Artist extends Model {
  declare userName: string;
  declare hash: string;
  declare email: string;

  static async register(userName, password, cards?) {
    const hash = await bcrypt.hash(password, 10);
    return Artist.create({ userName: userName, hash: hash, cards: cards });
  }
}

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
