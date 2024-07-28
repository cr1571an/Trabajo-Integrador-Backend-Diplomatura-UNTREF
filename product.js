const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  codigo: Number,
  nombre: String,
  precio: Number,
  categoria: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product