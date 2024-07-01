const Carteleras= require('../models/Carteleras');
//crear una funcion para llamado a select modelo
//envia parametro req y res 
//req siginifica request=peticion
//res significa response= respuesta
const listCarteleras= async (req,res)=>{
    try {
        //llamado a funcion de select
        const carteleras=await Carteleras.getCarteleras();
        res.json(carteleras);//parsea a json retorna la respuesta
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const insertCartelera=async(req,res)=>{
    try {
        const cartelera=await Carteleras.insert(req.body);
        //201 para crear 
        res.status(201).json(cartelera);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateCartelera=async(req,res)=>{
    try {
        const cartelera=await Carteleras.update(req.body,req.params.id);
        //200 por default
        res.status(200).json(cartelera);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteCartelera=async(req,res)=>{
    try {
        const cartelera=await Carteleras.delete(req.params.id);
        //201 para crear 
        res.json(cartelera)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports={
    listCarteleras,
    insertCartelera,
    updateCartelera,
    deleteCartelera,
}