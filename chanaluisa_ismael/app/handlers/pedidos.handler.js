const { response } = require('express');
const Pedido = require('../models/Pedido');

// crear una funcion para llamado a sselect del modelo
//envia parametros req y res 
// req signifca de request = peticion
// res sginifica response = respuesta 
const listaPedido = async (req, res) => {
    try {
        // llamado a funcion de select 
        const pedido = await Pedido.getPedidos();
        res.json(pedido); // parsea a json y retorna la respuesta 
    } catch(error) {
        res.status(500).json( {error: error.mesage } );

    }

}
const insertarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.insert(req.body);
        // 201 para crear
        res.status(201).json(pedido)
    } catch(error) {
        res.status(500).json( { error: error.mesage});
    }
} 
const updatePedido = async (req, res) => {
    try {
        const pedido = await Pedido.update(req.body, req.params.id);
        // 201 para crear
        res.status(201).json(pedido)
    } catch(error) {
        res.status(500).json( { error: error.mesage});
    }
} 


const deletePedido = async (req, res) => {
    try {
        const pedidoId = req.params.id;

        // Verificar si existe el pedido
        const pedido = await Pedido.query().findById(pedidoId);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido no encontrado.' });
        }

        // Eliminar el pedido
        await Pedido.query().deleteById(pedidoId);

        res.status(200).json({ message: 'Pedido eliminado exitosamente.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
    listaPedido,
    insertarPedido,
    updatePedido,
    deletePedido,
};