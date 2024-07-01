const Producto = require('../models/producto')
//crear una funcion para llamado a select del modelo 
//envia parametros  req y res
// res significa reponse= respuesta
// req significa request = respuesta
const listProducto = async(req, res)=>{
    try{
        const producto = await Producto.getProductos(); //llamado a funcion de select
        res.json(producto); //parsea a jason y retorna la respuesta
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
const insertProducto=async(req,res)=>{
    try {
        const producto = await Producto.insert(req.body);
        res.status(201).json(producto)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateProducto=async(req,res)=>{
    try {
        const producto = await Producto.update(req.body, req.params.id);
        //error por defecto
        res.json(producto)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteProducto=async(req,res)=>{
    try {
        const producto = await Producto.delete(req.params.id);
        res.json(producto)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports ={
    listProducto,
    insertProducto,
    updateProducto,
    deleteProducto,
};