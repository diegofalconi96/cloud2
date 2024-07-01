const Factura = require('../models/Factura');

const listFactura = async (req, res) => {
    try {
        const facturas = await Factura.getFactura();
        res.json(facturas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertFactura = async (req, res) => {
    try {
        const factura = await Factura.insert(req.body);
        res.status(201).json(factura); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateFactura = async (req, res) => {
    try {
        const factura = await Factura.update(req.body, req.params.id);
        res.json(factura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteFactura = async (req, res) => {
    try {
        await Factura.delete(req.params.id);
        res.status(204).end(); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listFactura,
    insertFactura,
    updateFactura,
    deleteFactura,
};
