// handlers/manager.handler.js
const Manager = require('../models/Manager');

const listManager = async (req, res) => {
    try {
        const managers = await Manager.getManagers();
        res.json(managers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertManager = async (req, res) => {
    try {
        const manager = await Manager.insertManager(req.body);
        res.json(manager);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateManager = async (req, res) => {
    try {
        const manager = await Manager.updateManager(req.params.id, req.body);
        res.json(manager);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteManager = async (req, res) => {
    try {
        const manager = await Manager.deleteManager(req.params.id);
        res.json(manager);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listManager,
    insertManager,
    updateManager,
    deleteManager,
};
