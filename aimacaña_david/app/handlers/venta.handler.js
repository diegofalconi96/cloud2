const Venta = require('../models/venta')
//crear una funcion para llamado a select del modelo 
//envia parametros  req y res
// res significa reponse= respuesta
// req significa request = respuesta
const listVenta = async(req, res)=>{
    try{
        const venta = await Venta.getVentas(); //llamado a funcion de select
        res.json(venta); //parsea a jason y retorna la respuesta
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
const insertVenta=async(req,res)=>{
    try {
        const venta = await Venta.insert(req.body);
        res.status(201).json(venta)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateVenta=async(req,res)=>{
    try {
        const venta = await Venta.update(req.body, req.params.id);
        //error por defecto
        res.json (venta)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteVenta=async(req,res)=>{
    try {
        const venta = await Venta.delete(req.params.id);
        res.json(venta)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports ={
    listVenta,
    insertVenta,
    updateVenta,
    deleteVenta,
};