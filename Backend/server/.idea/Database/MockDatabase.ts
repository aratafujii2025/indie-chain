import Card from '../Classes/Card';
import User from '../Classes/User'
import Artist from'../Classes/Artist'
const fs = require('fs')

const cards :any[] = []
const users: Object[] = []
const artists: Object[] = []


for(let i = 0; i < 10; i++){
    cards.push(new Card(i.toString()))
}


// Init our database here, only one will have cards for now
const suzie :User = new User('suzie','123')
const frank :User = new User('frank','123')
const liz :User = new User('liz','123')
const ted :User = new User('ted','123')
const elk :User = new User('elk','123')
elk.updateCards([...cards])


const sia :Artist = new Artist('sia','123')
const taylor: Artist = new Artist('taylor','123')


users.push(JSON.stringify(suzie))
users.push(JSON.stringify(frank))
users.push(JSON.stringify(liz))
users.push(JSON.stringify(ted))
users.push(JSON.stringify(elk))

artists.push(JSON.stringify(sia))
artists.push(JSON.stringify(taylor))

const jsonCards = JSON.stringify(cards)

export const userDB = {'users':users}
export const artistDB = {'artists':artists}

export const cardsDB = {'cards':cards}

fs.writeFileSync('userDB.json',JSON.stringify(userDB))
fs.writeFileSync('cardsDB.json',JSON.stringify(cardsDB))
fs.writeFileSync('artistsDB.json',JSON.stringify(artistDB))






