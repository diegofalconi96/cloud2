const DetalleFactura = require('../models/DetalleFactura');
const listDetalleFactura = async (req, res) => {
    try {
        const detalleFacturas = await DetalleFactura.getDetalleFactura();
        res.json(detalleFacturas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertDetalleFactura = async (req, res) => {
    try {
        const detalleFactura = await DetalleFactura.insert(req.body);
        res.status(201).json(detalleFactura); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateDetalleFactura = async (req, res) => {
    try {
        const detalleFactura = await DetalleFactura.update(req.body, req.params.id);
        res.json(detalleFactura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteDetalleFactura = async (req, res) => {
    try {
        await DetalleFactura.delete(req.params.id);
        res.status(204).end(); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listDetalleFactura,
    insertDetalleFactura,
    updateDetalleFactura,
    deleteDetalleFactura,
};