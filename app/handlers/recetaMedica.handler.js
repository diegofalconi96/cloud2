const { response } = require('express');
const RecetaMedica = require('../models/RecetaMedica');
//crear una funcion para llamado a select del modelo
// los parametros son de envio(req) y respuesta(res)
//de la linea 6 a la 14 es un select a todos mis datos
const listRecetaMedica = async (req,res) => {
    try{
        //llamado a la función  de select 
        const receta_medica = await RecetaMedica.getRecetasMedicas();
        res.json(receta_medica); //aqui le hago que se refactoriza a JSON y retorna la respuesta
    } catch (error){
        res.status(500).json({error: error.message});
    }
}
//insertar datos
const insertRecetaMedica = async(req, res) =>{
    try{
        const receta_medica = await RecetaMedica.insert(req.body);
        //el 201 para crear
        res.status(201).json(receta_medica)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//actualizar datos
const updateRecetaMedica = async(req, res) =>{
    try{
        const receta_medica = await RecetaMedica.update(req.body,req.params.id);
        res.json(receta_medica)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//eliminar datos
const deleteRecetaMedica = async(req, res) =>{
    try{
        const receta_medica = await RecetaMedica.delete(req.params.id);
        res.json(receta_medica)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//
module.exports = {
    listRecetaMedica,
    insertRecetaMedica,
    updateRecetaMedica,
    deleteRecetaMedica,
};