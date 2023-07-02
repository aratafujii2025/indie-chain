import Card from "./Card";
const assert = require("assert");
const bcrypt = require("bcrypt");
const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./Database/database.sqlite",
});
export default class User extends Model {
  declare userName: string;
  declare hash: string;
  declare email: string;

  static async register(userName, password, cards?) {
    const hash = await bcrypt.hash(password, 10);
    if (User.findOne({ where: { userName: userName } })) {
      return "a user exists with that name";
    }
    return User.create({ userName: userName, hash: hash, cards: cards });
  }
}

User.init(
  {
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
  },
  { sequelize, modelName: "User" }
);
exports.user = User;
