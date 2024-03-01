const express = require('express')
const app = express()
const port = 3000

const links = [{
  href: "#",
  title: "Battle Royale"
}]

app.set("view engine", "pug")

app.get('/', (req, res) => {
  res.render('index', { title: 'Fortnite', links: links })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})