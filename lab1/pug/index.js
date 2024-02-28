const express = require('express')
const app = express()
const port = 3000

const rackets = [
  {
    id: 1,
    name: "Babolat Drive Max 110",
    description: "Oversized frame for forgiving shots and strong power",
    price: 199.99,
    image: "https://t.ly/lQyla"
  },
  {
    id: 2,
    name: "Wilson Burn 100 CV",
    description: "Control-oriented racket with a smaller head size for precise shots",
    price: 249.99,
    image: "https://t.ly/BKUUP"
  },
  {
    id: 3,
    name: "Head Graphene 360+ Instinct LITE",
    description: "Lightweight and comfortable racket ideal for beginners and recreational players",
    price: 149.99,
    image: "https://t.ly/Rm-EH"
  },
];

app.set("view engine", "pug")

app.get('/', (req, res) => {
  res.render('index', { title: 'Tennis Rackets', rackets: rackets })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})