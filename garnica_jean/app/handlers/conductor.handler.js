const { response } = require('express');
const Conductor = require('../models/Conductor');

//crear una funcion para llamado a select del modelo
//enviamos parametros req y res
//req significa request = peticion
//res significa respose = respuesta

const listConductor = async (req,res) => {
    try{
        //llamado a funcion de select
        const conductor = await Conductor.getConductores();
        res.json(conductor); //parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json( {error: error.message} );
    }
}

//201 para crear
const insertConductor = async(req,res) => {
    try {
        const conductor = await Conductor.insert(req.body);
        res.status(201).json(conductor)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}


const updateConductor = async(req,res) => {
    try {
        const conductor = await Conductor.update(req.body, req.params.id);
        res.json(conductor)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}



const deleteConductor = async(req,res) => {
    try {
        const conductor = await Conductor.delete(req.params.id);
        res.json(conductor)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}

module.exports = {
    listConductor,
    insertConductor,
    updateConductor,
    deleteConductor,
}