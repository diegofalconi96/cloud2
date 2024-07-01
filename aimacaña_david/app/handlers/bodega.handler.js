const Bodega = require('../models/bodega')
//crear una funcion para llamado a select del modelo 
//envia parametros  req y res
// res significa reponse= respuesta
// req significa request = respuesta
const listBodega = async(req, res)=>{
    try{
        const bodega = await Bodega.getBodegas(); //llamado a funcion de select
        res.json(bodega); //parsea a jason y retorna la respuesta
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
const insertBodega=async(req,res)=>{
    try {
        const bodega = await Bodega.insert(req.body);
        res.status(201).json(bodega)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateBodega=async(req,res)=>{
    try {
        const bodega = await Bodega.update(req.body, req.params.id);
        //error por defecto
        res.json(bodega)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteBodega=async(req,res)=>{
    try {
        const bodega = await Bodega.delete(req.params.id);
        res.json(bodega)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports ={
    listBodega,
    insertBodega,
    updateBodega,
    deleteBodega,
};