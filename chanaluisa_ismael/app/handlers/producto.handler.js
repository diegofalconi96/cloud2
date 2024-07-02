const { response } = require('express');
const Producto = require('../models/Producto');

// crear una funcion para llamado a sselect del modelo
//envia parametros req y res 
// req signifca de request = peticion
// res sginifica response = respuesta 
const listaProducto = async (req, res) => {
    try {
        // llamado a funcion de select 
        const producto = await Producto.getProductos();
        res.json(producto); // parsea a json y retorna la respuesta 
    } catch(error) {
        res.status(500).json( {error: error.mesage } );

    }

}
const insertarProducto = async (req, res) => {
    try {
        const producto = await Producto.insert(req.body);
        // 201 para crear
        res.status(201).json(producto)
    } catch(error) {
        res.status(500).json( { error: error.mesage});
    }
} 
const updateProducto = async (req, res) => {
    try {
        const producto = await Producto.update(req.body, req.params.id);
        // 201 para crear
        res.status(201).json(producto)
    } catch(error) {
        res.status(500).json( { error: error.mesage});
    }
} 

const deleteProducto = async (req, res) => {
    try {
        const producto = await Producto.delete(req.params.id);
        // 201 para crear
        res.status(201).json(producto)
    } catch(error) {
        res.status(500).json( { error: error.mesage});
    }
} 
module.exports = {
    listaProducto,
    insertarProducto,
    updateProducto,
    deleteProducto,
};