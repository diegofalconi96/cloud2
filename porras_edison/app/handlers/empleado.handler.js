const Empleado = require('../models/empleado')

//El 'req' viene de request que es peticion y el 'res' viene de responde que es respuesta
const listarEmpleados = async (req, res) =>{
    try {
        //Llamado a funcion de select
        const empleado = await Empleado.getEmpleados();
        res.json(empleado); //formatea(parsea) a formato json y retorna la respuesta
    } catch (error) {
        res.status(500).json({error: error.message}); 
        //rango de 200 a 300 son respuestas correctas
        //201 para crear un registro
        //rango de 400 son para errores, 401 error autenticacion, 403 error data muy pesada y 500 error de servidor
    }
}

//Insertar Empleado
const insertarEmpleado = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const empleado = await Empleado.insert(req.body);
        //201 para crear
        res.status(201).json(empleado);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Actualizar Empleado
const actualizarEmpleado = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const empleado = await Empleado.update(req.body,req.params.id);
        //200 por defecto
        res.json(empleado);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Eliminar Empleado
const eliminarEmpleado = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const empleado = await Empleado.delete(req.params.id);
        //200 por defecto
        res.json(empleado);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Exportar modulos
module.exports = {
    listarEmpleados,
    insertarEmpleado,
    actualizarEmpleado,
    eliminarEmpleado,
}