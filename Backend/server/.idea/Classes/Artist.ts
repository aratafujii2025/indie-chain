import Card from './Card'
const assert = require('assert')
const bcrypt = require('bcrypt')
export default class Artist{
    userName:string;
    hash:string;
    cards?:Card[]


    private constructor(userName?,password?,cards?: Card[]){
        this.userName = userName
        this.hash = password
        this.cards = cards
    }

    updateCards(cards:Card[]){
        this.cards = cards;
    }

    static fromJson(json:Object) {
        return Object.assign(new Artist(),json)
    }
    static async register(userName,password,cards?){
        const hash = await bcrypt.hash(password,10)
        return new Artist(userName,hash,cards)
    }
}