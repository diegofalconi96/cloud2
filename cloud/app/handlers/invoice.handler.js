const Invoice = require('../models/Invoice')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listInvoice = async (req,res)=>{
    try{
        // llamado a funcion de select
        const invoice = await Invoice.getInvoices();
        res.json(invoice); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const insertInvoice = async(req,res)=>{
    try{
        const invoice =await Invoice.insert(req.body); 
        //201 para crear
        res.status(201).json(invoice)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const updateInvoice = async(req,res)=>{
    try{
        const invoice =await Invoice.update(req.body, req.params.id); 
        //200 por default
        res.json(invoice)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const deleteInvoice = async(req,res)=>{
    try{
        const invoice =await Invoice.delete(req.params.id); 
        //201 para crear
        res.json(invoice)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

module.exports ={
    listInvoice,
    insertInvoice,
    updateInvoice,
    deleteInvoice,
}