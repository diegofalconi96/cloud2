const { response } = require('express');
const Supplier = require('../models/Supplier');

const listSupplier = async(req, res) => {
    try{
        const supplier = await Supplier.getSupplier();
        res.json(supplier);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const insertSupplier = async(req, res) => {
    try{
        const supplier = await Supplier.insert(req.body);
        res.status(201).json(supplier);
    }catch(error){
        res.status(500).json({error: error.message})        
    }
}

const updateSupplier = async(req, res) => {
    try{
        const supplier = await Supplier.update(req.body, req.params.id);
        res.json(supplier);
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

const deleteSupplier = async(req, res) => {
    try{
        const supplier = await Supplier.delete(req.params.id);
        res.json(supplier);
    }catch(error){
        res.status(500).json({ error:error.message })
    }
}

module.exports = {
    listSupplier,
    insertSupplier,
    updateSupplier,
    deleteSupplier
}