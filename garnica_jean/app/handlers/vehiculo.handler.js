const { response } = require('express');
const Vehiculo = require('../models/Vehiculo');

//crear una funcion para llamado a select del modelo
//enviamos parametros req y res
//req significa request = peticion
//res significa respose = respuesta

const listVehiculo = async (req,res) => {
    try{
        //llamado a funcion de select
        const vehiculo = await Vehiculo.getVehiculos();
        res.json(vehiculo); //parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json( {error: error.message} );
    }
}

//201 para crear
const insertVehiculo = async(req,res) => {
    try {
        const vehiculo = await Vehiculo.insert(req.body);
        res.status(201).json(vehiculo)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}


const updateVehiculo = async(req,res) => {
    try {
        const vehiculo = await Vehiculo.update(req.body, req.params.id);
        res.json(vehiculo)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}



const deleteVehiculo = async(req,res) => {
    try {
        const vehiculo = await Vehiculo.delete(req.params.id);
        res.json(vehiculo)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}

module.exports = {
    listVehiculo,
    insertVehiculo,
    updateVehiculo,
    deleteVehiculo,
}