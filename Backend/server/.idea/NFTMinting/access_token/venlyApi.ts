var axios = require('axios');
var qs = require('qs');
let code:string = ""
var data = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': 'Testaccount-capsule',
    'client_secret': '82c19251-1753-44f5-ae76-93438d3628de'
});

var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://login-staging.arkane.network/auth/realms/Arkane/protocol/openid-connect/token',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
};

axios(config)
    .then((response) => {
        code = response.data['access_token']
        console.log(response.data)
        var fs = require('fs');
        const json = JSON.stringify({"access_token":code})
        console.log(json)
        fs.writeFile('access_token.json', json, 'utf8', () => {});
    })
    .catch(function (error) {
        console.log(error);
    });

