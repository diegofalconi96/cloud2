const Reserva = require('../models/Reserva') // Tener Conexion con el modelo Customer

// Hacer el CRUD

// Crear una función para el llamado a select del modelo
const listReserva = async(req, res) => {
    try{
        // Llamado a la funcion de select
        const reserva = await Reserva.getReservas();
        res.json(reserva); // parsea a json y retorna la respuesta

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para el ingreso de datos
const insertReserva = async(req,res) => {
    try{
        
        const reserva = await Reserva.insert(req.body);
        res.status(201).json(reserva) // parsea a json y retorna la respuesta codigo (201) para crear un dato

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para modificar los datos
const updateReserva = async(req, res) => {
    try{
        
        const reserva = await Reserva.update(req.body, req.params.id);
        res.json(reserva) // parsea a json y retorna la respuesta codigo (200) viene por default 

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para eliminar los datos
const deleteReserva = async(req, res) => {
    try{
        
        const reserva = await Reserva.delete(req.params.id);
        res.json(reserva);

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

module.exports = {
    listReserva,
    insertReserva,
    updateReserva,
    deleteReserva,
};