const Paises= require('../models/Paises');
//crear una funcion para llamado a select modelo
//envia parametro req y res 
//req siginifica request=peticion
//res significa response= respuesta
const listPaises= async (req,res)=>{
    try {
        //llamado a funcion de select
        const paises=await Paises.getPaises();
        res.json(paises);//parsea a json retorna la respuesta
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const insertPais=async(req,res)=>{
    try {
        const pais=await Paises.insert(req.body);
        //201 para crear 
        res.status(201).json(pais);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updatePais=async(req,res)=>{
    try {
        const pais=await Paises.update(req.body,req.params.id);
        //200 por default
        res.status(200).json(pais);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deletePais=async(req,res)=>{
    try {
        const pais=await Paises.delete(req.params.id);
        //201 para crear 
        res.json(pais)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports={
    listPaises,
    insertPais,
    updatePais,
    deletePais,
}