const Producto = require('../models/Producto');

const listProducto = async (req, res) => {
    try {
        const productos = await Producto.getProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const insertProducto = async (req, res) => {
    try {
        // Verificar que req.body contenga las propiedades requeridas
        if (!req.body.name || !req.body.price) {
            return res.status(400).json({ error: "Debe proporcionar 'name' y 'price'" });
        }

        const producto = await Producto.query().insert(req.body);
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProducto = async (req, res) => {
    try {
        const producto = await Producto.update(req.body, req.params.id);
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProducto = async (req, res) => {
    try {
        const producto = await Producto.delete(req.params.id);
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listProducto,
    insertProducto,
    updateProducto,
    deleteProducto,
};
