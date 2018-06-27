const express = require('express')

const app = express()
const request = require('request')
// const payload = require('./client-side/payload.JSON')

request('http://localhost:8080/client-side/payload.JSON', (err, response, body) => {
  app.get('/api/data', (req, res) => {
    res.send(body)
  })
})
app.listen(8081, () => console.log('backend service running🤓'))

