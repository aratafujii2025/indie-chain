
import Card from "./Card";
const assert = require('assert')
const bcrypt = require('bcrypt')
export default class User {
    userName:string;
    hash:string;
    cards?:Card[]


    constructor(userName?,password?,cards?: Card[]){
        bcrypt.hash(password,10,(err,hash) =>
        this.hash = hash)
        this.userName = userName
        cards? this.cards = cards: this.cards = []
    }

    updateCards(cards:Card[]){
        this.cards = cards;
    }

    static fromJson(json:Object) {
        return Object.assign(new User(),json)
    }
}
exports.user = User