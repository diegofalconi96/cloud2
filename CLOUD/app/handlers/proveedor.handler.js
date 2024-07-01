const Proveedor = require('../models/proveedor')

//El 'req' viene de request que es peticion y el 'res' viene de responde que es respuesta
const listarProveedores = async (req, res) =>{
    try {
        //Llamado a funcion de select
        const proveedor = await Proveedor.getProveedores();
        res.json(proveedor); //formatea(parsea) a formato json y retorna la respuesta
    } catch (error) {
        res.status(500).json({error: error.message}); 
        //rango de 200 a 300 son respuestas correctas
        //201 para crear un registro
        //rango de 400 son para errores, 401 error autenticacion, 403 error data muy pesada y 500 error de servidor
    }
}

//Insertar Proveedor
const insertarProveedor = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const proveedor = await Proveedor.insert(req.body);
        //201 para crear
        res.status(201).json(proveedor);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Actualizar Proveedor
const actualizarProveedor = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const proveedor = await Proveedor.update(req.body,req.params.id);
        //200 por defecto
        res.json(proveedor);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Eliminar Proveedor
const eliminarProveedor = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const proveedor = await Proveedor.delete(req.params.id);
        //200 por defecto
        res.json(proveedor);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Exportar modulos
module.exports = {
    listarProveedores,
    insertarProveedor,
    actualizarProveedor,
    eliminarProveedor
}