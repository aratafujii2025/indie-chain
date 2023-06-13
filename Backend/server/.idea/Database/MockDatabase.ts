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

const initDatabase  = async () =>
{
// Init our database here, only one will have cards for now
    const suzie: User = await User.register('suzie', '123')
    const frank:User = await User.register('frank', '123')
    const liz: User = await User.register('liz', '123')
    const ted: User = await User.register('ted', '123')
    const elk: User = await User.register('elk', '123')
    elk.updateCards([...cards])


    const sia: Artist = await Artist.register('sia', '123')
    const taylor: Artist = await Artist.register('taylor', '123')


    users.push(JSON.stringify(suzie))
    users.push(JSON.stringify(frank))
    users.push(JSON.stringify(liz))
    users.push(JSON.stringify(ted))
    users.push(JSON.stringify(elk))

    artists.push(JSON.stringify(sia))
    artists.push(JSON.stringify(taylor))

    const jsonCards = JSON.stringify(cards)

    const userDB = {'users': users}
    const artistDB = {'artists': artists}

    const cardsDB = {'cards': cards}

    fs.writeFileSync('userDB.json', JSON.stringify(userDB))
    fs.writeFileSync('cardsDB.json', JSON.stringify(cardsDB))
    fs.writeFileSync('artistsDB.json', JSON.stringify(artistDB))

}

initDatabase()



