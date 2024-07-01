const { response } = require('express');
const Sales = require('../models/Sales')

const listSales = async(req, res) => {
    try{
        const sales = await Sales.getSales();
        res.json(sales); //parsea a json y retorna la respuesta
    }
    catch (error){
        res.status(500).json({ error: error.message});
    }
}

const insertSales = async(req, res) => {
    try{
        const sales = await Sales.insert(req.body);
        // 201 para crear
        res.status(201).json(sales);
    }
    catch (error){
        res.status(500).json({ error: error.message});
    }
}

const updateSales = async(req, res) => {
    try{
        const sales = await Sales.update(req.body, req.params.id);
        // 201 para crear
        res.json(sales);
    }
    catch (error){
        res.status(500).json({ error: error.message});
    }
}

const deleteSales = async(req, res) => {
    try{
        const sales = await Sales.delete(req.params.id);
        // 201 para crear
        res.json(sales);
    }
    catch (error){
        res.status(500).json({ error: error.message});
    }
}

module.exports = {
    listSales,
    insertSales,
    updateSales,
    deleteSales
}