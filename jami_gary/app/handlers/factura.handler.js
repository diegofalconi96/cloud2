const Factura = require('../models/Factura');

const listFactura = async (req, res) => {
    try {
        // Llamado a la función de select
        const facturas = await Factura.getFacturas();
        res.json(facturas);  // Pasar a JSON y retornar la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertFactura = async (req, res) => {
    try {
        const factura = await Factura.insert(req.body);
        // 201 para crear
        res.status(201).json(factura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateFactura = async (req, res) => {
    try {
        const factura = await Factura.update(req.body, req.params.id_factura);
        res.json(factura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteFactura = async (req, res) => {
    try {
        const factura = await Factura.delete(req.params.id_factura);
        res.json(factura);
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
