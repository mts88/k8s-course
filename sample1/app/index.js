const express = require('express')
const axios = require('axios');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    cheers: 'Hello World upgraded version!',
    secret: process.env.SECRET_PASSWORD,
    sample2: process.env.MIMICCHIO2_URL
    })
})

app.get('/m1', (req, res) => {
  res.json({
    cheers: 'Hello World upgraded version!',
    secret: process.env.SECRET_PASSWORD,
    sample2: process.env.MIMICCHIO2_URL
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})