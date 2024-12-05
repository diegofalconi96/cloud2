const Peliculas= require('../models/Peliculas');
//crear una funcion para llamado a select modelo
//envia parametro req y res 
//req siginifica request=peticion
//res significa response= respuesta
const listPeliculas= async (req,res)=>{
    try {
        //llamado a funcion de select
        const peliculas=await Peliculas.getPeliculas();
        res.json(peliculas);//parsea a json retorna la respuesta
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const insertPelicula=async(req,res)=>{
    try {
        const pelicula=await Peliculas.insert(req.body);
        //201 para crear 
        res.status(201).json(pelicula);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updatePelicula=async(req,res)=>{
    try {
        const pelicula=await Peliculas.update(req.body,req.params.id);
        //200 por default
        res.status(200).json(pelicula);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deletePelicula=async(req,res)=>{
    try {
        const pelicula=await Peliculas.delete(req.params.id);
        //201 para crear 
        res.json(pelicula)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports={
    listPeliculas,
    insertPelicula,
    updatePelicula,
    deletePelicula,
}