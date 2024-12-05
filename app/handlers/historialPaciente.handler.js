const { response } = require('express');
const historialPaciente = require('../models/HistorialPaciente');
//crear una funcion para llamado a select del modelo
// los parametros son de envio(req) y respuesta(res)
//de la linea 6 a la 14 es un select a todos mis datos
const listHistorialPaciente = async (req,res) => {
    try{
        //llamado a la función  de select 
        const historial_paciente = await historialPaciente.getHistorialPacientes();
        res.json(historial_paciente); //aqui le hago que se refactoriza a JSON y retorna la respuesta
    } catch (error){
        res.status(500).json({error: error.message});
    }
}
//insertar datos
const insertHistorialPaciente = async(req, res) =>{
    try{
        const historial_paciente = await historialPaciente.insert(req.body);
        //el 201 para crear
        res.status(201).json(historial_paciente)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//actualizar datos
const updateHistorialPaciente = async(req, res) =>{
    try{
        const historial_paciente = await historialPaciente.update(req.body,req.params.id);
        res.json(historial_paciente)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//eliminar datos
const deleteHistorialPaciente = async(req, res) =>{
    try{
        const historial_paciente = await historialPaciente.delete(req.params.id);
        res.json(historial_paciente)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//
module.exports = {
    listHistorialPaciente,
    insertHistorialPaciente,
    updateHistorialPaciente,
    deleteHistorialPaciente,
};