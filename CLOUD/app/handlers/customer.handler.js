const Customer= require('../models/Customer');


const listCustomer = async (req, res)=>{
    try{
        const customer = await Customer.getCustomers();
        res.json(Customer);// parsea a json y retorna la respuesta
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const insertCustomer = async (req, res)=>{
    try{
        const customer =await Customer.insert(req.body);
        res.status(201).json(customer)
    } catch (error){
        res.status(500).json({error: error.message});
    }
}
const updateCustomer = async (req, res)=>{
    try{
        const customer =await Customer.update(req.body, req.params.id);
        res.status(201).json(customer)
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const deleteCustomer = async (req, res)=>{
    try{
        const customer =await Customer.delete(req.params.id);
        res.status(201).json(customer)
    } catch (error){
        res.status(500).json({error: error.message});
    }
}
module.exports = {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
};