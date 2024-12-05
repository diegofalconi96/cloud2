const Venta = require('../models/Ventas');

const listVenta = async (req,res) => {
    try{
        const venta = await Venta.getVentas(); 
        res.json(venta); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
} 

const insertVenta = async(req,res) => {
    try{
        const venta = await Venta.insert(req.body);
        res.status(201).json(venta); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
}


const updateVenta = async(req,res) => {
    try{
        const venta = await Venta.update(req.body,req.params.id);
        res.json(venta); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
}

const deleteVenta = async(req,res) => {
    try{
        const venta = await Venta.delete(req.params.id);
        res.json(venta); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
}


module.exports={
    listVenta,
    insertVenta,
    updateVenta,
    deleteVenta,
}

