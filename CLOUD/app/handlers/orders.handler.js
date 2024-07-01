const { response } = require('express');
const Orders = require('../models/Orders');

const listOrders = async(req, res) => {
    try{
        const orders = await Orders.getOrders();
        res.json(orders);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const insertOrders = async(req, res) => {
    try{
        const orders = await Orders.insert(req.body);
        res.status(201).json(orders);
    }catch(error){
        res.status(500).json({error: error.message})        
    }
}

const updateOrders = async(req, res) => {
    try{
        const orders = await Orders.update(req.body, req.params.id);
        res.json(orders);
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

const deleteOrders = async(req, res) => {
    try{
        const orders = await Orders.delete(req.params.id);
        res.json(orders);
    }catch(error){
        res.status(500).json({ error:error.message })
    }
}

module.exports = {
    listOrders,
    insertOrders,
    updateOrders,
    deleteOrders
}