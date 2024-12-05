const Eventos = require('../models/Eventos') // Tener Conexion con el modelo Customer

// Hacer el CRUD

// Crear una función para el llamado a select del modelo
const listEvento = async(req, res) => {
    try{
        // Llamado a la funcion de select
        const evento = await Eventos.getEventos();
        res.json(evento); // parsea a json y retorna la respuesta

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para el ingreso de datos
const insertEvento = async(req,res) => {
    try{
        
        const evento = await Eventos.insert(req.body);
        res.status(201).json(evento) // parsea a json y retorna la respuesta codigo (201) para crear un dato

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para modificar los datos
const updateEvento = async(req, res) => {
    try{
        
        const evento = await Eventos.update(req.body, req.params.id);
        res.json(evento) // parsea a json y retorna la respuesta codigo (200) viene por default 

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para eliminar los datos
const deleteEvento = async(req, res) => {
    try{
        
        const evento = await Eventos.delete(req.params.id);
        res.json(evento);

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

module.exports = {
    listEvento,
    insertEvento,
    updateEvento,
    deleteEvento,
};