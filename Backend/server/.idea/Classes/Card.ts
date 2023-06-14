const assert = require('assert')
const axios = require('axios')
const fs = require('fs')

export default class Card {
    name?:string;
    contractId:number;


    constructor(name?:string){
        // Do not use without name, this ensures that the json did in fact have a name field
        assert(name != null)
        this.name = name;

    }


    getName(){
        return this.name
    }

    static makeNft(contract){
    }

    static fromJson(json:Object) {
        return Object.assign(new Card(),json)
    }
}