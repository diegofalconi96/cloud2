const Venta = require('../models/venta')

//El 'req' viene de request que es peticion y el 'res' viene de responde que es respuesta
const listarVentas = async (req, res) =>{
    try {
        //Llamado a funcion de select
        const venta = await Venta.getVentas();
        res.json(venta); //formatea(parsea) a formato json y retorna la respuesta
    } catch (error) {
        res.status(500).json({error: error.message}); 
        //rango de 200 a 300 son respuestas correctas
        //201 para crear un registro
        //rango de 400 son para errores, 401 error autenticacion, 403 error data muy pesada y 500 error de servidor
    }
}

//Insertar Venta
const insertarVenta = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const venta = await Venta.insert(req.body);
        //201 para crear
        res.status(201).json(venta);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Actualizar Venta
const actualizarVenta = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const venta = await Venta.update(req.body,req.params.id);
        //200 por defecto
        res.json(venta);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Eliminar Venta
const eliminarVenta = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const venta = await Venta.delete(req.params.id);
        //200 por defecto
        res.json(venta);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Exportar modulos
module.exports = {
    listarVentas,
    insertarVenta,
    actualizarVenta,
    eliminarVenta
}