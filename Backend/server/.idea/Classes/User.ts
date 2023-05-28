
import Card from "./Card";
const assert = require('assert')
export default class User {
    userName:string;
    password:string;
    cards?:Card[]


    constructor(userName?,password?,cards?: Card[]){
        assert(userName != null)
        assert(password != null)
        this.userName = userName
        this.password = password
        cards? this.cards = cards: this.cards = []
    }

    updateCards(cards:Card[]){
        this.cards = cards;
    }

    static fromJson(json:Object) {
        return Object.assign(new User(),json)
    }
}