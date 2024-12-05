// handlers/location.handler.js
const Location = require('../models/Location');

const listLocation = async (req, res) => {
    try {
        const locations = await Location.getLocations();
        res.json(locations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertLocation = async (req, res) => {
    try {
        const location = await Location.insertLocation(req.body);
        res.json(location);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateLocation = async (req, res) => {
    try {
        const location = await Location.updateLocation(req.params.id, req.body);
        res.json(location);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteLocation = async (req, res) => {
    try {
        const location = await Location.deleteLocation(req.params.id);
        res.json(location);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listLocation,
    insertLocation,
    updateLocation,
    deleteLocation,
};
