const { response } = require('express');
const Paciente = require('../models/Paciente');
//crear una funcion para llamado a select del modelo
// los parametros son de envio(req) y respuesta(res)
//de la linea 6 a la 14 es un select a todos mis datos
const listPaciente = async (req,res) => {
    try{
        //llamado a la función  de select 
        const paciente = await Paciente.getPacientes();
        res.json(paciente); //aqui le hago que se refactoriza a JSON y retorna la respuesta
    } catch (error){
        res.status(500).json({error: error.message});
    }
}
//insertar datos
const insertPaciente = async(req, res) =>{
    try{
        const paciente = await Paciente.insert(req.body);
        //el 201 para crear
        res.status(201).json(paciente)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//actualizar datos
const updatePaciente = async(req, res) =>{
    try{
        const paciente = await Paciente.update(req.body,req.params.id);
        res.json(paciente)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//eliminar datos
const deletePaciente = async(req, res) =>{
    try{
        const paciente = await Paciente.delete(req.params.id);
        res.json(paciente)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//
module.exports = {
    listPaciente,
    insertPaciente,
    updatePaciente,
    deletePaciente,
};