const fs = require('fs')

export const getToken = ():string => {
    let token = ""
    return fs.readFile('access_token.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            token = JSON.parse(data)['access_token']

        }
    return token
    });
}
