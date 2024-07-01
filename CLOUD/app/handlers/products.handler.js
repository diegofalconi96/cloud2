const { response } = require('express');
const Products = require('../models/Products');

const listProducts = async(req, res) => {
    try{
        const products = await Products.getProducts();
        res.json(products);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const insertProducts = async(req, res) => {
    try{
        const products = await Products.insert(req.body);
        res.status(201).json(products);
    }catch(error){
        res.status(500).json({error: error.message})        
    }
}

const updateProducts = async(req, res) => {
    try{
        const products = await Products.update(req.body, req.params.id);
        res.json(products);
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

const deleteProducts = async(req, res) => {
    try{
        const products = await Products.delete(req.params.id);
        res.json(products);
    }catch(error){
        res.status(500).json({ error:error.message })
    }
}

module.exports = {
    listProducts,
    insertProducts,
    updateProducts,
    deleteProducts
}