const PymentMethod = require('../models/PymentMethod')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listPymentMethod = async (req,res)=>{
    try{
        // llamado a funcion de select
        const pymentMethod = await PymentMethod.getPymentMethods();
        res.json(pymentMethod); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const insertPymentMethod = async(req,res)=>{
    try{
        const pymentMethod =await PymentMethod.insert(req.body); 
        //201 para crear
        res.status(201).json(pymentMethod)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const updatePymentMethod = async(req,res)=>{
    try{
        const pymentMethod =await PymentMethod.update(req.body, req.params.id); 
        //200 por default
        res.json(pymentMethod)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const deletePymentMethod = async(req,res)=>{
    try{
        const pymentMethod =await PymentMethod.delete(req.params.id); 
        //201 para crear
        res.json(pymentMethod)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

module.exports ={
    listPymentMethod,
    insertPymentMethod,
    updatePymentMethod,
    deletePymentMethod,
}