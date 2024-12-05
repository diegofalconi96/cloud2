const express = require('express');
const { response } = express;
const Cliente = require('../models/Cliente');

const listaCliente = async (req, res) => {
    try {
        const clientes = await Cliente.getClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.insert(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCliente = async (req, res) => {
    try {
        const cliente = await Cliente.update(req.body, req.params.id);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCliente = async (req, res) => {
    try {
        const cliente = await Cliente.delete(req.params.id);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listaCliente,
    insertarCliente,
    updateCliente,
    deleteCliente,
};
