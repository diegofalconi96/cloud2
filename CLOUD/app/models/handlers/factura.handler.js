const Factura = require('../models/Factura');

//crear una funcion para llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//sec significa response = respuesta
const listFactura = async (req, res) => {
    try {
        const factura = await Factura.getFactura();
        res.json(factura); // convertir a json la respuesta
    } catch (error) {
        res.status(500).json( {error: error.message } );

    }
}

const insertFactura = async(req, res) => {
    try{
        const factura = await Factura.insert(req.body);
        //201 para crear
        res.status(201).json(factura)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
const updateFactura = async(req, res) => {
    try{
        const factura = await factura.update(req.body, req.params.id);
        //200 para default
        res.json(factura)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
const deletetFactura = async(req, res) => {
    try{
        const factura = await Factura.delete(req.params.id);
        //201 para crear
        res.json(factura)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
module.exports = {
    listFactura,
    insertFactura,
    updateFactura,
    deletetFactura,
};