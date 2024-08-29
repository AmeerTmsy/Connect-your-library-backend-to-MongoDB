require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes')
const autherRoutes = require('./routes/autherRoutes')
const app = express()
const port = 3000

app.use(cors()) 
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Library home page')
})

app.use('/books', bookRoutes)
app.use('/authers', autherRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


main().then(() => console.log('connected')).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}