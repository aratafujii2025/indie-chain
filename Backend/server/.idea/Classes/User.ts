
import Card from "./Card";
const assert = require('assert')
const bcrypt = require('bcrypt')
export default class User {
    userName:string;
    hash:string;
    cards?:Card[]


    constructor(userName?,password?,cards?: Card[]){
        this.userName = userName
        this.hash = password
        this.cards = cards
    }

    updateCards(cards:Card[]){
        this.cards = cards;
    }

    static fromJson(json:Object) {
        return Object.assign(new User(),json)
    }
    static async register(userName,password,cards?){
        const hash = await bcrypt.hash(password,10)
        return new User(userName,hash,cards)
    }
}
exports.user = User