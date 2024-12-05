const Cliente = require('../models/cliente')
//crear una funcion para llamado a select del modelo 
//envia parametros  req y res
// res significa reponse= respuesta
// req significa request = respuesta
const listCliente = async(req, res)=>{
    try{
        const cliente = await Cliente.getClientes(); //llamado a funcion de select
        res.json(cliente); //parsea a jason y retorna la respuesta
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
const insertCliente=async(req,res)=>{
    try {
        const cliente = await Cliente.insert(req.body);
        res.status(201).json(cliente)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateCliente=async(req,res)=>{
    try {
        const cliente = await Cliente.update(req.body, req.params.id);
        //error por defecto
        res.json(cliente)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteCliente=async(req,res)=>{
    try {
        const cliente = await Cliente.delete(req.params.id);
        res.json(cliente)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports ={
    listCliente,
    insertCliente,
    updateCliente,
    deleteCliente,
};