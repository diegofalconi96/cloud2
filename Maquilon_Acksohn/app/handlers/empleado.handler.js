const Empleado = require('../models/Empleados');

const listEmpleado = async (req,res) => {
    try{
        const empleado = await Empleado.getEmpleados(); 
        res.json(empleado); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
} 

const insertEmpleado = async(req,res) => {
    try{
        const empleado = await Empleado.insert(req.body);
        res.status(201).json(empleado); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
}


const updateEmpleado = async(req,res) => {
    try{
        const empleado = await Empleado.update(req.body,req.params.id);
        res.json(empleado); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
}

const deleteEmpleado = async(req,res) => {
    try{
        const empleado = await Empleado.delete(req.params.id);
        res.json(empleado); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
}


module.exports={
    listEmpleado,
    insertEmpleado,
    updateEmpleado,
    deleteEmpleado,
}

