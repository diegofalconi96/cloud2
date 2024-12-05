const Producto = require('../models/Producto') // Tener Conexion con el modelo Customer

// Hacer el CRUD

// Crear una función para el llamado a select del modelo
const listProducto = async(req, res) => {
    try{
        // Llamado a la funcion de select
        const producto = await Producto.getProductos();
        res.json(producto); // parsea a json y retorna la respuesta

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para el ingreso de datos
const insertProducto = async(req,res) => {
    try{
        
        const producto = await Producto.insert(req.body);
        res.status(201).json(producto) // parsea a json y retorna la respuesta codigo (201) para crear un dato

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para modificar los datos
const updateProducto = async(req, res) => {
    try{
        
        const producto = await Producto.update(req.body, req.params.id);
        res.json(producto) // parsea a json y retorna la respuesta codigo (200) viene por default 

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para eliminar los datos
const deleteProducto = async(req, res) => {
    try{
        
        const producto = await Producto.delete(req.params.id);
        res.json(producto);

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

module.exports = {
    listProducto,
    insertProducto,
    updateProducto,
    deleteProducto,
};