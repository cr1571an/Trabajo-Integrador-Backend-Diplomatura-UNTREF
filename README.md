# Proyecto Integrador: CRUD con Node.js y MongoDB
## Descripción del Proyecto
Este proyecto es una aplicación basada en Node.js y MongoDB que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos. La base de datos MongoDB se encuentra alojada en un clúster de MongoDB Atlas y la aplicación Node.js se conecta a ella. Utiliza el dataset JSON computacion.json para simular una colección de productos de computación, que fue importado en MongoDB.

## Dataset Utilizado

- **computacion.json**: Productos de computación, partes, accesorios y repuestos

## Funcionalidades del CRUD
1. **Obtener todos los productos**: 
   - Endpoint para leer todos los productos de la colección.
2. **Obtener un producto**: 
   - Endpoint para obtener un producto por su ID.
3. **Filtrar productos**: 
   - Endpoint para filtrar productos por nombre (búsqueda parcial).
4. **Agregar un nuevo producto**: 
   - Endpoint para agregar un nuevo producto.
5. **Modificar el precio de un producto**: 
   - Endpoint para cambiar el precio de un producto usando PATCH.
6. **Borrar un producto**: 
   - Endpoint para borrar un producto usando DELETE.
   - Control de errores: Manejo de errores en la estructura de las solicitudes y respuestas, control de acceso a rutas no existentes con respuestas apropiadas.

## Requisitos

- Node.js
- npm
- Cuenta en MongoDB Atlas

## Instalación

Clona el repositorio:
```bash

git clone https://github.com/cr1571an/Trabajo-Integrador-Backend-Diplomatura-UNTREF.git
cd repositorio
```
**Instala las dependencias**:

```bash
npm install
```
## Configura las variables de entorno en un archivo .env (ejemplo de configuración):

- MONGODB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/nombreBaseDatos?retryWrites=true&w=majority
- PORT=3000
- DATABASE_NAME = productsdb

## Inicia la aplicación:

```bash
npm start
```
## Endpoints

- GET /productos: Obtener todos los productos.
- GET /productos/:id: Obtener un producto por su ID.
- GET /productos/buscar/search?name=teclado Filtrar productos por nombre.
- POST /productos: Agregar un nuevo producto.
- PATCH /productos/:id: Modificar el precio de un producto.
- DELETE /productos/:id: Borrar un producto.

## Estructura del Repositorio
```plaintext

/README.md: Archivo con la descripción del proyecto.
/app.js: Archivo principal de la aplicación Node.js donde se define la lógica de rutas y la conexión a la base de datos.
/database.js: Archivo para configurar la conexión a la base de datos MongoDB.
/product.js: Archivo que contiene el esquema (schema) del producto utilizando Mongoose.
/api.http: Archivo con los endpoints disponibles para las consultas Http.

```