const { response } = require('express');
const Doctor = require('../models/Doctor');
//crear una funcion para llamado a select del modelo
// los parametros son de envio(req) y respuesta(res)
//de la linea 6 a la 14 es un select a todos mis datos
const listDoctor = async (req,res) => {
    try{
        //llamado a la función  de select 
        const doctor = await Doctor.getDoctores();
        res.json(doctor); //aqui le hago que se refactoriza a JSON y retorna la respuesta
    } catch (error){
        res.status(500).json({error: error.message});
    }
}
//insertar datos
const insertDoctor = async(req, res) =>{
    try{
        const doctor = await Doctor.insert(req.body);
        //el 201 para crear
        res.status(201).json(doctor)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//actualizar datos
const updateDoctor = async(req, res) =>{
    try{
        const doctor = await Doctor.update(req.body,req.params.id);
        res.json(doctor)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//eliminar datos
const deleteDoctor = async(req, res) =>{
    try{
        const doctor = await Doctor.delete(req.params.id);
        res.json(doctor)
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
//
module.exports = {
    listDoctor,
    insertDoctor,
    updateDoctor,
    deleteDoctor,
};