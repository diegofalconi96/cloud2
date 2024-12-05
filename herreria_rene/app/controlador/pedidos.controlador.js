const Pedidos = require('../models/Pedidos') // Tener Conexion con el modelo Customer

// Hacer el CRUD

// Crear una función para el llamado a select del modelo
const listPedido = async(req, res) => {
    try{
        // Llamado a la funcion de select
        const pedido = await Pedidos.getPedidos();
        res.json(pedido); // parsea a json y retorna la respuesta

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para el ingreso de datos
const insertPedido = async(req,res) => {
    try{
        
        const pedido = await Pedidos.insert(req.body);
        res.status(201).json(pedido) // parsea a json y retorna la respuesta codigo (201) para crear un dato

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para modificar los datos
const updatePedido = async(req, res) => {
    try{
        
        const pedido = await Pedidos.update(req.body, req.params.id);
        res.json(pedido) // parsea a json y retorna la respuesta codigo (200) viene por default 

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para eliminar los datos
const deletePedido = async(req, res) => {
    try{
        
        const pedido = await Pedidos.delete(req.params.id);
        res.json(pedido);

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

module.exports = {
    listPedido,
    insertPedido,
    updatePedido,
    deletePedido,
};