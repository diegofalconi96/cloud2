const Pedidos = require('../models/Pedidos');

//crear una funcion para llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//sec significa response = respuesta
const listPedidos = async (req, res) => {
    try {
        const pedidios = await Pedidos.getPedidos();
        res.json(pedidios); // convertir a json la respuesta
    } catch (error) {
        res.status(500).json( {error: error.message } );

    }
}

const insertPedidos = async(req, res) => {
    try{
        const pedidos = await Pedidos.insert(req.body);
        //201 para crear
        res.status(201).json(pedidos)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
const updatePedidos = async(req, res) => {
    try{
        const pedidos = await Pedidos.update(req.body, req.params.id);
        //200 para default
        res.json(pedidos)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
const deletetPedidos = async(req, res) => {
    try{
        const pedidos = await Pedidos.delete(req.params.id);
        //201 para crear
        res.json(pedidos)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
module.exports = {
    listPedidos,
    insertPedidos,
    updatePedidos,
    deletetPedidos,
};