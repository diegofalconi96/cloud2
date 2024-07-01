const { response } = require('express');
const Cita = require('../models/Cita');
//crear una funcion para llamado a select del modelo
// los parametros son de envio(req) y respuesta(res)
//de la linea 6 a la 14 es un select a todos mis datos
const listCita = async (req,res) => {
    try{
        //llamado a la función  de select 
        const cita = await Cita.getCitas();
        res.json(cita); //aqui le hago que se refactoriza a JSON y retorna la respuesta
    } catch (error){
        res.status(500).json({error: error.message});
    }
}
//insertar datos
const insertCita = async(req, res) =>{
    try{
        const cita = await Cita.insert(req.body);
        //el 201 para crear
        res.status(201).json(cita)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//actualizar datos
const updateCita = async(req, res) =>{
    try{
        const cita = await Cita.update(req.body,req.params.id);
        res.json(cita)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//eliminar datos
const deleteCita = async(req, res) =>{
    try{
        const cita = await Cita.delete(req.params.id);
        res.json(cita)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//
module.exports = {
    listCita,
    insertCita,
    updateCita,
    deleteCita,
};