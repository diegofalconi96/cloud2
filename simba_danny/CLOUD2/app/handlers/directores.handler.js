const Directores= require('../models/Directores');
//crear una funcion para llamado a select modelo
//envia parametro req y res 
//req siginifica request=peticion
//res significa response= respuesta
const listDirectores= async (req,res)=>{
    try {
        //llamado a funcion de select
        const directores=await Directores.getDirectores();
        res.json(directores);//parsea a json retorna la respuesta
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const insertDirector=async(req,res)=>{
    try {
        const director=await Directores.insert(req.body);
        //201 para crear 
        res.status(201).json(director);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateDirector=async(req,res)=>{
    try {
        const director=await Directores.update(req.body,req.params.id);
        //200 por default
        res.status(200).json(director);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteDirector=async(req,res)=>{
    try {
        const Director=await Directores.delete(req.params.id);
        //201 para crear 
        res.json(Director)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports={
    listDirectores,
    insertDirector,
    updateDirector,
    deleteDirector,
}