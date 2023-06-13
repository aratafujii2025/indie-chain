const express = require('express')
const fs = require('fs')
import User from './Classes/User'
let users:User[] = []

const makeUsers = async () => {
    users = await fs.readFile("Database/userDB.json", 'utf8', (err, data) => {
        if (err) {
            throw new Error('file could not be read')
        }
        console.log(JSON.parse(data)['users'])
        return JSON.parse(data)['users'].map((elt) => User.fromJson(JSON.parse(elt)))
    })
}

await makeUsers()





