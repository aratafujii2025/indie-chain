import Card from "./Card";
import User from "./User";
const assert = require("assert");
const bcrypt = require("bcrypt");
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
import { sendEmail } from "../utils/sendEmail";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./Database/database.sqlite",
});
export default class Artist extends Model {
  declare userName: string;
  declare hash: string;
  declare email: string;
  declare artistId: number;

  static async register(userName, password, cards?) {
    const hash = await bcrypt.hash(password, 10);
    return Artist.create({ userName: userName, hash: hash, cards: cards });
  }
  checkName(username) {
    const user = User.findone({ where: { username: username } });
    const usersCards = user.getCards().map((x) => x.artistId);
    return usersCards.contains(this.artistId);
  }

  async getUsers(tier?, collection?) {
    let toRet = [];
    if (collection && tier) return null;
    User.sync();
    if (collection) {
      let allUsers = await User.findAll();
      allUsers = allUsers.filter((user) => this.checkName(user.userName));
      allUsers.forEach((user) => {
        const allCards = user.getCards();
        if (allCards.map((x) => x.collection === collection).any()) {
          toRet.push(user);
        }
      });
    } else if (tier) {
      let allUsers = await User.findAll();
      allUsers = allUsers.filter((user) => this.checkName(user.userName));
      allUsers.forEach((user) => {
        const allCards = user.getCards();
        if (allCards.map((x) => x.collection === collection).any()) {
          toRet.push(user);
        }
      });
    } else {
      let allUsers = await User.findAll();
      allUsers = allUsers.filter((user) => this.checkName(user.userName));
      return allUsers;
    }
    return toRet;
  }

  async sendMail(message, subject, users) {
    users.forEach((user) => {
      sendEmail(this.email, message, subject);
    });
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
