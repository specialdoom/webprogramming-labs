const express = require('express')
const app = express()
const port = 3000
const { links, modes, tips, features, skins, articles } = require("./data")

app.set("view engine", "pug")

app.get('/', (req, res) => {
  res.render('index', { title: 'Fortnite', links, modes, tips, features, skins, articles })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})