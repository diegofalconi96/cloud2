const { response } = require('express');
const Inspeccionador = require('../models/Inspeccionador');

//crear una funcion para llamado a select del modelo
//enviamos parametros req y res
//req significa request = peticion
//res significa respose = respuesta

const listInspeccionador = async (req,res) => {
    try{
        //llamado a funcion de select
        const inspeccionador = await Inspeccionador.getInspeccionadores();
        res.json(inspeccionador); //parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json( {error: error.message} );
    }
}

//201 para crear
const insertInspeccionador = async(req,res) => {
    try {
        const inspeccionador = await Inspeccionador.insert(req.body);
        res.status(201).json(inspeccionador)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}


const updateInspeccionador = async(req,res) => {
    try {
        const inspeccionador = await Inspeccionador.update(req.body, req.params.id);
        res.json(inspeccionador)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}



const deleteInspeccionador = async(req,res) => {
    try {
        const inspeccionador = await Inspeccionador.delete(req.params.id);
        res.json(inspeccionador)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}

module.exports = {
    listInspeccionador,
    insertInspeccionador,
    updateInspeccionador,
    deleteInspeccionador,
}