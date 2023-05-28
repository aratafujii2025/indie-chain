import Card from './Card'
const assert = require('assert')
export default class Artist{
    userName :string;
    password :string;
    cards :Card[]


    constructor(userName?:string,password?:string) {
        assert(userName != null)
        assert(password != null)
        this.userName = userName
        this.password = password
    }

    makeCard() {
        console.log('card successfully made')
    }

    static fromJson(json:Object) {
        // To use, call artist.from with a json that has userName and password fields
        return Object.assign(new Artist(),json)
    }
}