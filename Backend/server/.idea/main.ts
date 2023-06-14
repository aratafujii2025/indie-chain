const express = require('express')
const fs = require('fs')
const bcrypt = require('bcrypt')
import User from './Classes/User'
const bodyParser = require('body-parser')

let getUsers = ():User[] => {
    const data = fs.readFileSync("Database/userDB.json", 'utf8')
    return JSON.parse(data)['users'].map((elt) => User.fromJson(elt))
}

let addUser = async (userName,password) => {
    const curUsers:User[] = getUsers()
    console.log('curUsers is ' + curUsers)
    await User.register(userName,password).then((result) => fs.writeFileSync("Database/userDB.json",JSON.stringify({users:[...curUsers,result]})))

}

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) => {
    res.send('hi')
})

app.post("/login",async (req,res) => {
    let data = req.body
    const users = getUsers()
    const user = users.find(user => user.userName === data['username'])
    if (!user){
        res.json({'msg':'error'})
    } else {
        const passwordsMatch = await bcrypt.compare(data.password,user.hash)
        if (passwordsMatch){
            res.json({'msg':'user entered correct password!'})
        } else {
            res.json({'msg':'password was incorrect'})
        }
    }

})

app.post("/register",async (req,res) => {
    let data = req.body
    await addUser(data.username,data.password)
    res.json({'msg':'success'})
})

app.listen(port, () => {
    console.log('server running')
})








