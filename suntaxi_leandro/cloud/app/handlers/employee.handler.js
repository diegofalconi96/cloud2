// handlers/employee.handler.js
const Employee = require('../models/Employee');

const listEmployee = async (req, res) => {
    try {
        const employees = await Employee.getEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertEmployee = async (req, res) => {
    try {
        const employee = await Employee.insertEmployee(req.body);
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.updateEmployee(req.params.id, req.body);
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.deleteEmployee(req.params.id);
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listEmployee,
    insertEmployee,
    updateEmployee,
    deleteEmployee,
};
