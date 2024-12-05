const { response } = require('express');
const Provedor = require('../models/Provedor');

//crear una funcion para llamado a select del modelo
//enviamos parametros req y res
//req significa request = peticion
//res significa respose = respuesta

const listProvedor = async (req,res) => {
    try{
        //llamado a funcion de select
        const provedor = await Provedor.getProvedores();
        res.json(provedor); //parsea a json y retorna la respuesta
    }catch(error){
        res.status(500).json( {error: error.message} );
    }
}

//201 para crear
const insertProvedor = async(req,res) => {
    try {
        const provedor = await Provedor.insert(req.body);
        res.status(201).json(provedor)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}


const updateProvedor = async(req,res) => {
    try {
        const provedor = await Provedor.update(req.body, req.params.id);
        res.json(provedor)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}



const deleteProvedor = async(req,res) => {
    try {
        const provedor = await Provedor.delete(req.params.id);
        res.json(provedor)
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}

module.exports = {
    listProvedor,
    insertProvedor,
    updateProvedor,
    deleteProvedor,
}