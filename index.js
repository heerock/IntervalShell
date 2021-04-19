const curl = require('curl')
require('dotenv').config()
const run = () => {

    const url = process.env.SERVER_URL
    const url_alerts = process.env.SERVER_ALERTS_URL
    setInterval(() => {
        curl.get(url, {}, (err, res, body) => {
            console.log('Curl Status Connect')
        })

    }, 1000)

    setInterval(() => {
        curl.get(url_alerts, {}, (err, res, body) => {
            console.log('Curl Alerts Connect')
        })
    }, 1000)
}

run()