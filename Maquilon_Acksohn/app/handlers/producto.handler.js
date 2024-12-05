const Producto = require('../models/Productos');

const listProducto = async (req,res) => {
    try{
        const producto = await Producto.getProductos(); 
        res.json(producto); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
} 

const insertProducto = async(req,res) => {
    try{
        const producto = await Producto.insert(req.body);
        res.status(201).json(producto); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
}


const updateProducto = async(req,res) => {
    try{
        const producto = await Producto.update(req.body,req.params.id);
        res.json(producto); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
}

const deleteProducto = async(req,res) => {
    try{
        const producto = await Producto.delete(req.params.id);
        res.json(producto); 
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
}


module.exports={
    listProducto,
    insertProducto,
    updateProducto,
    deleteProducto,
}

