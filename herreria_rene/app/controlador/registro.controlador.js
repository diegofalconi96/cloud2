const Registro = require('../models/Registro') // Tener Conexion con el modelo Customer

// Hacer el CRUD

// Crear una función para el llamado a select del modelo
const listRegistro = async(req, res) => {
    try{
        // Llamado a la funcion de select
        const registro = await Registro.getRegistros();
        res.json(registro); // parsea a json y retorna la respuesta

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para el ingreso de datos
const insertRegistro = async(req,res) => {
    try{
        
        const registro = await Registro.insert(req.body);
        res.status(201).json(registro) // parsea a json y retorna la respuesta codigo (201) para crear un dato

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para modificar los datos
const updateRegistro = async(req, res) => {
    try{
        
        const registro = await Registro.update(req.body, req.params.id);
        res.json(registro) // parsea a json y retorna la respuesta codigo (200) viene por default 

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

// Crear una función para eliminar los datos
const deleteRegistro = async(req, res) => {
    try{
        
        const registro = await Registro.delete(req.params.id);
        res.json(registro);

    } catch (error){

        res.status(500).json( { error: error.message } ); // Error de servidor (500)

    }
} // Parámetros --> req = (request) peticion y res = (Response) respuesta 

module.exports = {
    listRegistro,
    insertRegistro,
    updateRegistro,
    deleteRegistro,
};