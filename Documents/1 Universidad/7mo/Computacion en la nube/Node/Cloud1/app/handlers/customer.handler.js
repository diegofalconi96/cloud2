const Customer = require('../models/Customer');

//Crear una funcion para llamado a select del modelo
//Envia parametros req, res
//req significa request = peticion
//res significa response - respuesta
const listCustomer = async (req, res) => {
    try {
        //Llamado a la funcion de select
        const customer = await Customer.getAll();
        res.json(customer);//Parsea a json y retorna la respuesta
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

const insertCustomer = async(rep, res)=>{
    try {
        const customer = await Customer.insert(rep.body);
        //201 para crear
        res.status(201).json(customer)
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

const updateCustomer = async(rep, res)=>{
    try {
        const customer = await Customer.update(rep.body, req.params.id);
        //201 para crear
        res.json(customer)
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

const deleteCustomer = async(rep, res)=>{
    try {
        const customer = await Customer.delete(req.params.id);
        //201 para crear
        res.json(customer)
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
}