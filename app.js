const express = require('express')
const morgan = require('morgan')

const connectDB = require('./database')
const Product = require('./product')
const port = process.env.PORT ?? 3000

const app = express()

app.use(express.json())
app.use(morgan('dev'))

connectDB()

app.get('/products', async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      res.status(500).send('Error al obtener los productos de informatica',error);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
