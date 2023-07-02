import User from "./User";

const assert = require("assert");
const axios = require("axios");
const fs = require("fs");
const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./Database/database.sqlite",
});

export default class Card extends Model {
  declare total: number;
  declare currentAddres: number;
  declare id: number;
  declare madeAs: number;
  declare imagePath: string;

  getName() {
    return this.name;
  }

  static makeNft(contract) {
    Card.create(contract);
  }

  static fromJson(json: Object) {
    return Object.assign(new Card(), json);
  }
}
Card.init(
  {
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
  },
  { sequelize, modelName: "Card" }
);
