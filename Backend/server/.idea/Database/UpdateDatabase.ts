import Card from "../Classes/Card";
import User from "../Classes/User";
import { Op } from "sequelize";

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("database.sqlite", sqlite3.OPEN_READWRITE);
db.run(
  "CREATE TABLE IF NOT EXISTS CardOwner(User varchar(255),CardHash int, Quantity int, primary key (User,CardHash));"
);
export const updateDatabase = async () => {
  await User.sync();
  await Card.sync();
  const allUsers = await User.findAll();
  allUsers.foreach((user) => {
    const cards = user.getCards();
    cards.forEach((card) => {
      if (!fetchNFT(card.address) === user.address) {
        db.run(
          `delete from CardOwner where User == ${user.username} and CardHash == ${card.hash}`
        );
      }
    });
  });
};

const fetchNFT = (address) => {
  const result = true; // This needs to be an axios fetch
  return result;
};
db.close();
