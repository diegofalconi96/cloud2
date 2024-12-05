const { response } = require('express');
const Customer = require('../models/Customer');

//crear una funcion para llamado a select del modelo
//enviamos parametros req y res
//req significa request = peticion
//res significa respose = respuesta

const listCustomer = async (req,res) => {
    try{
        //llamado a funcion de select
        const customer = await Customer.getCustomers();
        res.json(customer); //parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json( {error: error.message} );
    }
}

//201 para crear
const insertCustomer = async(req,res) => {
    try {
        const customer = await Customer.insert(req.body);
        res.status(201).json(customer)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}


const updateCustomer = async(req,res) => {
    try {
        const customer = await Customer.update(req.body, req.params.id);
        res.json(customer)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}



const deleteCustomer = async(req,res) => {
    try {
        const customer = await Customer.delete(req.params.id);
        res.json(customer)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}

module.exports = {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
}