const Producto = require('../models/producto')

//El 'req' viene de request que es peticion y el 'res' viene de responde que es respuesta
const listarProductores = async (req, res) =>{
    try {
        //Llamado a funcion de select
        const producto = await Producto.getProductores();
        res.json(producto); //formatea(parsea) a formato json y retorna la respuesta
    } catch (error) {
        res.status(500).json({error: error.message}); 
        //rango de 200 a 300 son respuestas correctas
        //201 para crear un registro
        //rango de 400 son para errores, 401 error autenticacion, 403 error data muy pesada y 500 error de servidor
    }
}

//Insertar Producto
const insertarProducto = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const producto = await Producto.insert(req.body);
        //201 para crear
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Actualizar Producto
const actualizarProducto = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const producto = await Producto.update(req.body,req.params.id);
        //200 por defecto
        res.json(producto);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Eliminar Producto
const eliminarProducto = async(req,res)=>{
    try {
        //Llamado a funcion de insert
        const producto = await Producto.delete(req.params.id);
        //200 por defecto
        res.json(producto);
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}

//Exportar modulos
module.exports = {
    listarProductores,
    insertarProducto,
    actualizarProducto,
    eliminarProducto
}