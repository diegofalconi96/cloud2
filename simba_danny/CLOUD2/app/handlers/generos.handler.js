const Generos= require('../models/Generos');
//crear una funcion para llamado a select modelo
//envia parametro req y res 
//req siginifica request=peticion
//res significa response= respuesta
const listGeneros= async (req,res)=>{
    try {
        //llamado a funcion de select
        const generos=await Generos.getGeneros();
        res.json(generos);//parsea a json retorna la respuesta
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const insertGenero=async(req,res)=>{
    try {
        const genero=await Generos.insert(req.body);
        //201 para crear 
        res.status(201).json(genero);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateGenero=async(req,res)=>{
    try {
        const genero=await Generos.update(req.body,req.params.id);
        //200 por default
        res.status(200).json(genero);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteGenero=async(req,res)=>{
    try {
        const genero=await Generos.delete(req.params.id);
        //201 para crear 
        res.json(genero)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports={
    listGeneros,
    insertGenero,
    updateGenero,
    deleteGenero,
}