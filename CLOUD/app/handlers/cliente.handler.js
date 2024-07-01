const Cliente = require('../models/cliente');

//El 'req' viene de request que es peticion y el 'res' viene de responde que es respuesta
const listarClientes = async (req, res) =>{
    try {
        //Llamado a funcion de select
        const cliente = await Cliente.getClientes();
        res.json(cliente); //formatea(parsea) a formato json y retorna la respuesta
    } catch (error) {
        res.status(500).json({error: error.message}); 
        //rango de 200 a 300 son respuestas correctas
        //201 para crear un registro
        //rango de 400 son para errores, 401 error autenticacion, 403 error data muy pesada y 500 error de servidor
    }
}

//Insertar Cliente
const insertarCliente = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const cliente = await Cliente.insert(req.body);
        //201 para crear
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Actualizar Cliente
const actualizarCliente = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const cliente = await Cliente.update(req.body,req.params.id);
        //200 por defecto
        res.json(cliente);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Eliminar Cliente
const eliminarCliente = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const cliente = await Cliente.delete(req.params.id);
        //200 por defecto
        res.json(cliente);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Exportar modulos
module.exports = {
    listarClientes,
    insertarCliente,
    actualizarCliente,
    eliminarCliente,
}