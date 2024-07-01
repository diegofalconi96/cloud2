const DetalleVenta = require('../models/detalle.venta')
//crear una funcion para llamado a select del modelo 
//envia parametros  req y res
// res significa reponse= respuesta
// req significa request = respuesta
const listDetalle = async(req, res)=>{
    try{
        const detalle = await DetalleVenta.getDetalles(); //llamado a funcion de select
        res.json(detalle); //parsea a jason y retorna la respuesta
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
const insertDetalle=async(req,res)=>{
    try {
        const detalle = await DetalleVenta.insert(req.body);
        res.status(201).json(detalle)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateDetalle=async(req,res)=>{
    try {
        const detalle = await DetalleVenta.update(req.body, req.params.id);
        //error por defecto
        res.json (detalle)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteDetalle=async(req,res)=>{
    try {
        const detalle = await DetalleVenta.delete(req.params.id);
        res.json(detalle)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports ={
    listDetalle,
    insertDetalle,
    updateDetalle,
    deleteDetalle,
};