const { response } = require('express');
const Employee = require('../models/Employee');

const listEmployee = async(req, res) => {
    try{
        const employee = await Employee.getEmployee();
        res.json(employee);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const insertEmployee = async(req, res) => {
    try{
        const employee = await Employee.insert(req.body);
        res.status(201).json(employee);
    }catch(error){
        res.status(500).json({error: error.message})        
    }
}

const updateEmployee = async(req, res) => {
    try{
        const employee = await Employee.update(req.body, req.params.id);
        res.json(employee);
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

const deleteEmployee = async(req, res) => {
    try{
        const employee = await Employee.delete(req.params.id);
        res.json(employee);
    }catch(error){
        res.status(500).json({ error:error.message })
    }
}

module.exports = {
    listEmployee,
    insertEmployee,
    updateEmployee,
    deleteEmployee
}