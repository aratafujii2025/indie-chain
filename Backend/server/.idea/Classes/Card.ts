const assert = require('assert')
const API_TOKEN = require('../NFTMinting/access_token/token').getToken()
const axios = require('axios')
const fs = require('fs')

let id = fs.readFile('id.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        return JSON.parse(data)['id']

    }

});


const config = (data,id) => {
    fs.writeFileSync(id.json,{'id':++id},'utf8', () => {})
    return  {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://api-business-staging.venly.io/api/apps/3b613051-4e10-479d-a75a-ee355541e5a0/contracts/${id}/token-types`,
    headers: {
        'Content-Type': 'application/json'
    },
    data : data
};}


type contractRequest = {
    "name": "string",
    "symbol"?: "string",
    "description": "string",
    "image": "string",
    "externalUrl": "string",
    "media"?: {},
    "owner"?: "string",
    "autoApprovedAddressesLocked"?: true,
    "storage"?: {
        "type": "CLOUD",
        "location": "string"
    },
    "chain"?: "AETERNITY"
 }

export default class Card {
    name?:string;
    contractId:number;


    constructor(name?:string,contract?:contractRequest){
        // Do not use without name, this ensures that the json did in fact have a name field
        assert(name != null)
        this.name = name;
        if(contract) Card.makeNft(contract)

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