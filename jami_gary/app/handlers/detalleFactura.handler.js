const DetalleFactura = require('../models/DetalleFactura');

const listDetalleFactura = async (req, res) => {
    try {
        // Llamado a la función de select
        const detallesFactura = await DetalleFactura.getDetallesFactura();
        res.json(detallesFactura);  // Pasar a JSON y retornar la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertDetalleFactura = async (req, res) => {
    try {
        const detalleFactura = await DetalleFactura.insert(req.body);
        // 201 para crear
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
        const detalleFactura = await DetalleFactura.delete(req.params.id);
        res.json(detalleFactura);
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
