// handlers/product.handler.js
const Product = require('../models/Product');

const listProduct = async (req, res) => {
    try {
        const products = await Product.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertProduct = async (req, res) => {
    try {
        const product = await Product.insertProduct(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.updateProduct(req.params.id, req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.deleteProduct(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
};
