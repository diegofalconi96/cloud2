const { response } = require('express');
const Carga = require('../models/Carga');

//crear una funcion para llamado a select del modelo
//enviamos parametros req y res
//req significa request = peticion
//res significa respose = respuesta

const listCarga = async (req,res) => {
    try{
        //llamado a funcion de select
        const carga = await Carga.getCargas();
        res.json(carga); //parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json( {error: error.message} );
    }
}

//201 para crear
const insertCarga = async(req,res) => {
    try {
        const carga = await Carga.insert(req.body);
        res.status(201).json(carga)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}


const updateCarga = async(req,res) => {
    try {
        const carga = await Carga.update(req.body, req.params.id);
        res.json(carga)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}



const deleteCarga = async(req,res) => {
    try {
        const carga = await Carga.delete(req.params.id);
        res.json(carga)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}

module.exports = {
    listCarga,
    insertCarga,
    updateCarga,
    deleteCarga,
}