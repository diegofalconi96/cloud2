const Category = require('../models/Category');

const listCategories = async (req, res) => {
    try {
        const categories = await Category.getCategories();
        res.json(categories); // Return JSON response
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertCategory = async (req, res) => {
    try {
        const category = await Category.insert(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const category = await Category.update(req.body, req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const category = await Category.delete(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listCategories,
    insertCategory,
    updateCategory,
    deleteCategory,
};
