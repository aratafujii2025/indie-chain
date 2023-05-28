const assert = require('assert')
export default class Card {
    name?:string;


    constructor(name?:string){
        // Do not use without name, this ensures that the json did in fact have a name field
        assert(name != null)
        this.name = name;
        this.makeNft()

    }


    getName(){
        return this.name
    }

    makeNft(){
        console.log('nft will be made here')
    }

    static fromJson(json:Object) {
        return Object.assign(new Card(),json)
    }
}