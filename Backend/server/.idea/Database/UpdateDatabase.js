"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = __importDefault(require("../Classes/Card"));
const User_1 = __importDefault(require("../Classes/User"));
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("database.sqlite", sqlite3.OPEN_READWRITE);
db.run(
  "CREATE TABLE IF NOT EXISTS INVENTORY(User varchar(255),CardHash int, Quantity int, primary key (User,CardHash));"
);
const updateDatabase = async () => {
  await User_1.default.sync();
  await Card_1.default.sync();
  const allCards = await Card_1.default.findAll();
  allCards.foreach((card) => {
    if (!fetchNFT(card.address)) {
    }
  });
};
const fetchNFT = (address) => {
  const result = true; // This needs to be an axios fetch
  return result;
};
