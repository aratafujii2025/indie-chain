"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = __importDefault(require("../Classes/Card"));
const User_1 = __importDefault(require("../Classes/User"));
const Artist_1 = __importDefault(require("../Classes/Artist"));
const fs = require('fs');
const cards = [];
const users = [];
const artists = [];
for (let i = 0; i < 10; i++) {
    cards.push(new Card_1.default(i.toString()));
}
const initDatabase = async () => {
    // Init our database here, only one will have cards for now
    const suzie = await User_1.default.register('suzie', '123');
    const frank = await User_1.default.register('frank', '123');
    const liz = await User_1.default.register('liz', '123');
    const ted = await User_1.default.register('ted', '123');
    const elk = await User_1.default.register('elk', '123');
    elk.updateCards([...cards]);
    const sia = new Artist_1.default('sia', '123');
    const taylor = new Artist_1.default('taylor', '123');
    users.push(JSON.stringify(suzie));
    users.push(JSON.stringify(frank));
    users.push(JSON.stringify(liz));
    users.push(JSON.stringify(ted));
    users.push(JSON.stringify(elk));
    artists.push(JSON.stringify(sia));
    artists.push(JSON.stringify(taylor));
    const jsonCards = JSON.stringify(cards);
    const userDB = { 'users': users };
    const artistDB = { 'artists': artists };
    const cardsDB = { 'cards': cards };
    fs.writeFileSync('userDB.json', JSON.stringify(userDB));
    fs.writeFileSync('cardsDB.json', JSON.stringify(cardsDB));
    fs.writeFileSync('artistsDB.json', JSON.stringify(artistDB));
};
initDatabase();
