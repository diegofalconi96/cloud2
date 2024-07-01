const Customer = require('../models/Customer') // Tener Conexion con el modelo Customer

// Hacer el CRUD

// Crear una función para el llamado a select del modelo
const listCustomer = async(req, res) => {
    try{
        // Llamado a la funcion de select
        const customer = await Customer.getCustomers();
        res.json(customer); // parsea a json y retorna la respuesta

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para el ingreso de datos
const insertCustomer = async(req,res) => {
    try{
        
        const customer = await Customer.insert(req.body);
        res.status(201).json(customer) // parsea a json y retorna la respuesta codigo (201) para crear un dato

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para modificar los datos
const updateCustomer = async(req, res) => {
    try{
        
        const customer = await Customer.update(req.body, req.params.id);
        res.json(customer) // parsea a json y retorna la respuesta codigo (200) viene por default 

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para eliminar los datos
const deleteCustomer = async(req, res) => {
    try{
        
        const customer = await Customer.delete(req.params.id);
        res.json(customer);

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

module.exports = {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
};