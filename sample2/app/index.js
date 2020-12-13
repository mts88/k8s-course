const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.json({
    cheers: 'Hello im service 2',
    env: process.env.ENVIRONMENT
  })
})


app.get('/m2', (req, res) => {
  res.json({
    cheers: 'Hello im service 2',
    env: process.env.ENVIRONMENT
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})