const Vendedor = require('../models/vendedor')
//crear una funcion para llamado a select del modelo 
//envia parametros  req y res
// res significa reponse= respuesta
// req significa request = respuesta
const listVendedor = async(req, res)=>{
    try{
        const vendedor = await Vendedor.getVendedores(); //llamado a funcion de select
        res.json(vendedor); //parsea a jason y retorna la respuesta
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
const insertVendedor=async(req,res)=>{
    try {
        const vendedor = await Vendedor.insert(req.body);
        res.status(201).json(vendedor)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateVendedor=async(req,res)=>{
    try {
        const vendedor = await Vendedor.update(req.body, req.params.id);
        //error por defecto
        res.json(vendedor)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteVendedor=async(req,res)=>{
    try {
        const vendedor = await Vendedor.delete(req.params.id);
        res.json(vendedor)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports ={
    listVendedor,
    insertVendedor,
    updateVendedor,
    deleteVendedor,
};