
import Card from "./Card";
const assert = require('assert')
const bcrypt = require('bcrypt')
const {  Sequelize, Op, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Database/database.sqlite'
});
export default class User extends Model {
    declare userName:string;
    declare hash:string;
    declare email:string;



    updateCards(cards:Card[]){
        this.cards = cards;
    }

    static fromJson(json:Object) {
        return Object.assign(new User(),json)
    }
    static async register(userName,password,cards?){
        const hash = await bcrypt.hash(password,10)
        return User.create({'userName':userName,'hash':hash,'cards':cards})
    }
}

User.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    hash:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING
    }
},{sequelize,modelName:'User'})
exports.user = User