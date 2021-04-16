const curl = require('curl')
require('dotenv').config()
const run = () => {

    const url = process.env.SERVER_URL
    setInterval(() => {
        curl.get(url, {}, (err, res, body) => {
            console.log('Curl Connect')
        })
    }, 1000)
}

run()