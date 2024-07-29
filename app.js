const express = require('express')
const mongoose = require('mongoose')
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
      console.error(error);
      res.status(500).send('Error al obtener los productos de informatica.');
    }
})

app.get('/product/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID de producto no válido' });
    }
  
    try {
      const product = await Product.findById(id);
      if (product) return res.json(product);
      return res.status(404).json({ message: 'Producto no encontrado.' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor.' });
    }
})

app.get('/productcod/:codigo', async (req, res) => {
  const { codigo } = req.params;
  try {
    const product = await Product.findOne({codigo: codigo});
    if (product) return res.json(product);
    return res.status(404).json({ message: 'Codigo no encontrado.' });

  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error del servidor.' });
  }
})


app.get('/products/search', async (req, res) => {
  const { name } = req.query;
  try {
    const products = await Product.find({ nombre: { $regex: name, $options: 'i' }});
    if (products.length > 0) {
      return res.json(products);
    } else {
      return res.status(404).json({ message: 'Nombre no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor.' });
  }
})

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body)
  try {
    await newProduct.save()
    res.status(201).json(newProduct)
  } catch {
    return res.status(500).json({ message: 'Error al agregar el producto' })
  }
})

app.patch('/products/:id', async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID de producto no válido' });
  }

  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' })
    }
    res.json({ message: 'Producto actualizado', product })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al actualizar la producto' })
  }
})


app.delete('/products/:id', async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID de producto no válido' });
  }

  try {
    const resultado = await Product.findByIdAndDelete(id)
    if (resultado) {
      res.json({ message: 'Producto borrada con exito' })
    } else {
      res.status(404).json({ message: 'Producto no encontrado.' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al borrar el producto' })
  }
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
