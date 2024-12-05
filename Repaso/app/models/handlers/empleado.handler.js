const Empleado = require('../models/Empleado');

//crear una funcion para llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//sec significa response = respuesta
const listEmpleado = async (req, res) => {
    try {
        const empleado= await Empleado.getEmpleado();
        res.json(empleado); // convertir a json la respuesta
    } catch (error) {
        res.status(500).json( {error: error.message } );

    }
}

const insertEmpleado = async(req, res) => {
    try{
        const empleado = await Empleado.insert(req.body);
        //201 para crear
        res.status(201).json(empleado)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
const updateEmpleado = async(req, res) => {
    try{
        const empleado = await Empleado.update(req.body, req.params.id);
        //200 para default
        res.json(empleado)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
const deletetEmpleado = async(req, res) => {
    try{
        const empleado = await Empleado.delete(req.params.id);
        //201 para crear
        res.json(empleado)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
module.exports = {
    listEmpleado,
    insertEmpleado,
    updateEmpleado,
    deletetEmpleado,
};